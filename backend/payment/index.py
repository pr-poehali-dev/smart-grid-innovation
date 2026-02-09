import json
import os
import uuid
import requests
import xml.etree.ElementTree as ET
from yookassa import Configuration, Payment

Configuration.account_id = os.environ.get('YOOKASSA_SHOP_ID')
Configuration.secret_key = os.environ.get('YOOKASSA_SECRET_KEY')

def get_eur_to_rub_rate() -> float:
    '''Получает курс EUR/RUB от ЦБ РФ'''
    try:
        response = requests.get('https://www.cbr.ru/scripts/XML_daily.asp', timeout=5)
        response.raise_for_status()
        
        root = ET.fromstring(response.content)
        for valute in root.findall('Valute'):
            char_code = valute.find('CharCode')
            if char_code is not None and char_code.text == 'EUR':
                value = valute.find('Value')
                nominal = valute.find('Nominal')
                if value is not None and nominal is not None:
                    rate = float(value.text.replace(',', '.'))
                    nominal_val = float(nominal.text.replace(',', '.'))
                    return rate / nominal_val
        
        return 100.0
    except Exception:
        return 100.0

def handler(event: dict, context) -> dict:
    '''API для создания платежей через ЮKassa'''
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method == 'POST':
        try:
            body = json.loads(event.get('body', '{}'))
            
            amount_eur = body.get('amount_eur')
            description = body.get('description', 'Оплата тура')
            return_url = body.get('return_url', 'https://ingasavina.ru/booking/success')
            email = body.get('email')
            phone = body.get('phone')
            
            if not amount_eur:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Amount in EUR is required'})
                }
            
            rate = get_eur_to_rub_rate()
            amount_rub = round(amount_eur * rate, 2)
            
            idempotence_key = str(uuid.uuid4())
            
            payment_data = {
                'amount': {
                    'value': f'{amount_rub:.2f}',
                    'currency': 'RUB'
                },
                'confirmation': {
                    'type': 'redirect',
                    'return_url': return_url
                },
                'capture': True,
                'description': description
            }
            
            if email:
                payment_data['receipt'] = {
                    'customer': {'email': email},
                    'items': [{
                        'description': description,
                        'quantity': '1.00',
                        'amount': {
                            'value': f'{amount_rub:.2f}',
                            'currency': 'RUB'
                        },
                        'vat_code': 1
                    }]
                }
            
            if phone:
                if 'metadata' not in payment_data:
                    payment_data['metadata'] = {}
                payment_data['metadata']['phone'] = phone
            
            payment = Payment.create(payment_data, idempotence_key)
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'id': payment.id,
                    'status': payment.status,
                    'confirmation_url': payment.confirmation.confirmation_url,
                    'amount_eur': amount_eur,
                    'amount_rub': amount_rub,
                    'exchange_rate': rate
                })
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)})
            }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }