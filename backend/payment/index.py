import json
import os
import uuid
from yookassa import Configuration, Payment

Configuration.account_id = os.environ.get('YOOKASSA_SHOP_ID')
Configuration.secret_key = os.environ.get('YOOKASSA_SECRET_KEY')

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
            
            amount = body.get('amount')
            description = body.get('description', 'Оплата тура')
            return_url = body.get('return_url', 'https://ingasavina.ru/booking/success')
            email = body.get('email')
            phone = body.get('phone')
            
            if not amount:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Amount is required'})
                }
            
            idempotence_key = str(uuid.uuid4())
            
            payment_data = {
                'amount': {
                    'value': str(amount),
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
                            'value': str(amount),
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
                    'confirmation_url': payment.confirmation.confirmation_url
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
