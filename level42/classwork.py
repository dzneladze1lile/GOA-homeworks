# ფუნქცია პროგრამირებაშიარის პროგრამა, რომელიც აკეთებს ერთ საქმეს, ვქმნით მას ერთხელ და მერე ვხმარობთ როცა გვინდა.

def test():
    print("this is my classwork")
# ტერმინალში არაფერი გამოიტანა, მხოლოდ შევქმენით ფუნქცია, მაგრამ არ ვასრულებთ მას. ტექსტი რომ გამოჩნდეს უნდა დავწეროთ ასე: test()

def test():
    print("this is my classwork")
test()
test()
test()

def number():
    total = 0
    for i in range(5):
        num = float(input("Enter your number: "))
        total = total + num
    print(total / 5)
number()


def sayhi():
    print("hello, it is nice to meet you")
greeting = sayhi()
print(greeting)
# ფუნქცია sayhi() ბეჭდავს ტექსტს (print()) მაგრამ არ აბრუნებს მნიშვნელობას. ამიტომ როცა მას ცვლადში ვინახავთ ცვლადი ინახავს none რაც ნიშნავს რომ ფუნქციამ არაფერი დააბრუნა._
