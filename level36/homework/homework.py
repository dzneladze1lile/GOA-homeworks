# return ფუნქციაში აბრუნებს მნიშვნელობას და ასრულებს ფუნქციის შესრულებას.

def multiply (x, y):
    z = x * y
    return z

print(multiply(2, 3))


def multiply (x, y, z):
    xyz = x * y * z
    return xyz

print(multiply(7, 5, 9))


def return_num(x):
    return x

def multiply(y):
    return y * 2
result = multiply(return_num(5))
print(result)
