my_list = []
for _ in range(5):
    num = int(input("Enter number: "))
    my_list.append(num)
print(my_list)


i = 1
while i < len(my_list):
    my_list.pop(i)
    i += 1
print(my_list)


num = int(input("Enter number: "))
new_list = []
while num != 0:
    new_list.append(num)
    num = int(input("Enter number: "))
print(new_list)


