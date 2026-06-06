# არგუმენტი არის მონაცემი რომელსაც ფუნქციას გადასცემ როცა მას იძახებ.
# range არის ფუნქცია რომელიც რიცხვების მიმდევრობას გამოსახავს.

total=0
for i in range(50, 101):
    total+=i
    print(total)

total = 1
for i in range (100, 199):
    total *= i
    print(total)

# for ციკლი გამოიყენება მაშინ, როცა ზუსტად ვიცით რამდენჯერ უნდა შესრულდეს მოქმედება. while ციკლი იმუშავებს იქამდე სანამ პირობა მართალი არ იქნება.

i = 1
while i <= 10:
    print(i)
    i += 1

secret = 7  
guess = 0   

while guess != secret:
    guess = int(input("Enter a number between 1 and 10: "))
    
    if guess != secret:
        print("Wrong number")

print("You Win!")
