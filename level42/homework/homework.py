def add_numbers(a, b):
    return a + b
result = add_numbers(2,4)
print(result)


def average(c, d, e):
    return (c+d+e)//3
result = average(5,6,7)
print(result)


def max_number(a,b):
    if a > b:
        return a
    else:
        return b
result = max_number(7, 8)
print(result)


def even_or_odd(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"
print(even_or_odd(10))


def sum_list(a,b,c,d,e,f,g):
    return a+b+c+d+e+f+g
result = sum_list(1,2,3,4,5,6,7)
print(result)
    

def filter_num(numbers):
    even_numbers = []
    for num in numbers:
        print(f"{num}")  
        if num % 2 == 0:
            print(f"{num}")
            even_numbers.append(num)
        else:
            print(f"{num}")
    print(f"{even_numbers}")
    return even_numbers  
nums = [1, 2, 3, 4, 5, 6, 7, 8]
result = filter_num(nums)
print(f"{result}")


def word_length(string):
    return len(string)
print(word_length("hello"))


def longest_word(words):
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest
word_list = ["house", "pineapple", "tree"]
print(longest_word(word_list))


def square(number):
    return number ** 2
print(square(4))






