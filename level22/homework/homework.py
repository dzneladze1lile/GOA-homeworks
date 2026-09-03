number = 5
attempt = 3
user_input = ""

while user_input != number and attempt > 0:
    user_input = int(input("Guess the number between 1-10: "))
    attempt -= 1
    
    if user_input == number:
        print("You win!")
    elif attempt == 0:
        print("You lose!")
    else:
        print("Wrong number!")
        print("You still have " + str(attempt) + " tries")

# number არის რიცხვი, რომლის გამოცნობაც მომხმარებელმა უნდა შეძლოს. attempt არის ცდების რაოდენობა. user_input არის ცვლადი სადაც ვინახავთ მომხმარებლის ჩაწერილ რიცხვს. while ციკლი გაგრძელდება მანამ სანამ რიცხვი სწორ პასუხს არ დაემთხვევა და ნულზე მეტი არ იქნება. შემდეგ მომხმარებელს შეჰყავს რიცხვი, წინ ვუწერთ int ს რადგან სტრინგი გადავაქციოთ ინტეჯერად. თუ რიცხვს არასწორად ჩაწერ და ვერ გამოიცნობ 1 ცდა დაგაკლდება. თუ მომხმარებელი სწორად გამოიცნობს რიცხვს დაიპრინტება you win. თუ ვერ გამოიცნობს და ცდების რაოდენობა 0 ზე ჩამოვა დაიპრინტება you lose. თუ ვერ გამოიცნო და ცდები კიდევ აქვს დარჩენილი დაიპრინტება wrong number, you still have 2 tries, ან რამდენი ცდაც ექნება დარჩენილი.