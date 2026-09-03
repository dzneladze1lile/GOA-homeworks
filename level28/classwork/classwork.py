# in ოპერატორი გამოიყენება იმის გასამოწმებლად, არის თუ არა ერთი ელემენტი მეორის შიგნით. მაგ: სიაში, სტრინგში და შედეგად გვაძლევს true ან false მნიშვნელობას.


my_list = [10, 20, 30, 40, 50]
for item in my_list:
    print(item)
    

names = ["Ana", "Beka", "Nino"]
user_name = input("Enter your name: ")
if user_name in names:
    print("name is in the list")
else:
    print("name is not in the list")


numbers = [3, 5, 7, 2, 8]
total = 0
for num in numbers:
    total += num
print(total)


user_number = int(input("Enter number: "))
number_list = [1, 4, 6, 8, 10]
if user_number in number_list:
    print("number is in the list")
else:
    print("number is not in the list")