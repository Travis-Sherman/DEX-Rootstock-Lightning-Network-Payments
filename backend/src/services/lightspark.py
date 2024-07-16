import backend.src.services.lightspark as lightspark
import requests

client = lightspark.Client(api_key="YOUR_API_KEY")

def create_invoice(amount):
    response = client.create_invoice(amount)
    return response['invoice']

def pay_invoice(invoice):
    response = client.pay_invoice(invoice)
    return response['status']

invoice = create_invoice(1000)
status = pay_invoice(invoice)
print(status)
