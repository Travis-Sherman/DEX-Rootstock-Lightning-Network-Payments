import requests

def get_price():
    response = requests.get("https://api.anduro.io/price/BTC")
    data = response.json()
    return data['price']

price = get_price()
print(f"Current BTC price: {price}")
