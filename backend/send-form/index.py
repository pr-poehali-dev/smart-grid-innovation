import json
import os
import urllib.request
import urllib.parse
import psycopg2

def handler(event: dict, context) -> dict:
    '''Отправка данных форм в Telegram и сохранение в БД'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Получаем данные из запроса
    body = json.loads(event.get('body', '{}'))
    form_type = body.get('type', 'contact')
    
    # Получаем IP и User-Agent из запроса
    ip_address = event.get('requestContext', {}).get('identity', {}).get('sourceIp')
    user_agent = event.get('headers', {}).get('user-agent')
    
    # Формируем сообщение в зависимости от типа формы
    if form_type == 'contact':
        message = f"""🆕 Новый запрос с сайта!

👤 Имя: {body.get('name', 'Не указано')}
📧 Email: {body.get('email', 'Не указано')}

💬 Сообщение:
{body.get('message', 'Не указано')}"""
    
    elif form_type == 'booking':
        message = f"""🎫 Новая бронь тура!

📅 Даты: {body.get('tour', 'Не выбрано')}
👥 Участников: {body.get('guests', 'Не указано')}

👤 Имя: {body.get('name', 'Не указано')}
📧 Email: {body.get('email', 'Не указано')}
📱 Телефон: {body.get('phone', 'Не указано')}

💬 Комментарий:
{body.get('message', 'Нет')}"""
    
    elif form_type == 'expectations':
        expectations = body.get('expectations', [])
        exp_text = '\n'.join([f"✓ {exp}" for exp in expectations]) if expectations else 'Не указано'
        
        message = f"""📝 Анкета ожиданий от участника

📞 Контакт: {body.get('contact', 'Не указано')}

{exp_text}

🎒 Опыт яхтинга/треккинга:
{body.get('experience', 'Не указано')}

❓ Вопросы и пожелания:
{body.get('questions', 'Не указано')}"""
    
    else:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Unknown form type'}),
            'isBase64Encoded': False
        }
    
    # Сохранение в базу данных
    db_url = os.environ.get('DATABASE_URL')
    lead_id = None
    
    if db_url:
        try:
            conn = psycopg2.connect(db_url)
            cur = conn.cursor()
            
            if form_type == 'contact':
                cur.execute(
                    "INSERT INTO leads (form_type, name, email, message, ip_address, user_agent) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
                    (form_type, body.get('name'), body.get('email'), body.get('message'), ip_address, user_agent)
                )
            elif form_type == 'booking':
                cur.execute(
                    "INSERT INTO leads (form_type, name, email, phone, message, tour_dates, guests_count, ip_address, user_agent) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
                    (form_type, body.get('name'), body.get('email'), body.get('phone'), body.get('message'), body.get('tour'), body.get('guests'), ip_address, user_agent)
                )
            elif form_type == 'expectations':
                cur.execute(
                    "INSERT INTO leads (form_type, expectations, experience, questions, contact_info, ip_address, user_agent) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id",
                    (form_type, body.get('expectations', []), body.get('experience'), body.get('questions'), body.get('contact'), ip_address, user_agent)
                )
            
            lead_id = cur.fetchone()[0]
            conn.commit()
            cur.close()
            conn.close()
            print(f'Lead saved to DB with ID: {lead_id}')
        except Exception as e:
            print(f'DB error: {type(e).__name__}: {str(e)}')
    
    # Отправка в Telegram
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    print(f'Bot token present: {bool(bot_token)}')
    print(f'Chat ID present: {bool(chat_id)}')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Telegram credentials not configured'}),
            'isBase64Encoded': False
        }
    
    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {
        'chat_id': chat_id,
        'text': message
    }
    
    print(f'Sending to Telegram: {telegram_url}')
    print(f'Data: chat_id={chat_id}, message length={len(message)}')
    
    try:
        req = urllib.request.Request(
            telegram_url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read().decode('utf-8'))
            print(f'Telegram response: {result}')
            
            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'success': True, 'lead_id': lead_id}),
                    'isBase64Encoded': False
                }
            else:
                print(f'Telegram API returned not ok: {result}')
                return {
                    'statusCode': 500,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Telegram API error', 'details': result}),
                    'isBase64Encoded': False
                }
    
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        print(f'HTTPError: {e.code} - {error_body}')
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'HTTP {e.code}', 'details': error_body}),
            'isBase64Encoded': False
        }
    except Exception as e:
        print(f'Exception: {type(e).__name__}: {str(e)}')
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }