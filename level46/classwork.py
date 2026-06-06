numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[4])
print(numbers[7])
print(numbers[0:11])
print(numbers[::-1])
print(numbers[::4])
print(numbers[0:5])
print(numbers[0:8:2])

numbers[1] = "Lile"
print(numbers)

numbers[1] = "nini"
print(numbers)

numbers[1], numbers[2] = numbers[2], numbers[1]
print(numbers)

