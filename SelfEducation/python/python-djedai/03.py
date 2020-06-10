print('Привет \'Мир\'')
print('Привет \n\'Мир\'')
print('''привет
мир''')

a = input('Как вас зовут?: ')
print(a)

print( input('Как вас зовут?: ') )

# you can call your vars as what you want, but don't use special symbols and
# name doesn't start from number

b = input('введите число: ')
c = input('введите число: ')

# сложатся строки
print(b + c)

print(int(b) + int(c))

# in python if you sum strings where have numbers they don't sum basic
# mathematics the just concatenate
# it's not like a php
print("2" + "2")

# you CAN'T concatenate numbers and strings, only strings and strings
# print(1+"2"+3+'4')

print('lorem' * 10)

name = input('Введутие имя: ')
count = input("Сколько раз написать? ")

print(name * int(count))