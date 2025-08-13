def calculate_discount : 
 if discount >=20% 
    return "Eligible for discount"
 else:
    return "original price"

price =float(input("Enter the price: "))
discount_price = float(input("Enter the discount price: "))

final_price = price - (price * (discount_price / 100))

print("The final price is :" final_price)