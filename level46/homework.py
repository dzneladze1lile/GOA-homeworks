count = 0
for i in range(1, 101):
    if (i % 3 == 0 or i % 5 == 0) and not (i % 3 == 0 and i % 5 == 0):
        count += 1
print(count)


N = int(input("Enter number: "))
for num in range(2, N + 1):
    is_prime = True
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
    if is_prime:
        print(num)


even_num = 0
odd_num = 0
for i in range(50, 151):
    if num % 2 == 0:
        even_num += i
    else:
        odd_num += i
print(even_num)
print(odd_num)


def names():
    names = []
    for _ in range(5):
        name = input("Enter name: ")
        names.append(name)
    print(names)
names()