# test = None
# test = 132
# print(test)

#bool
my_true = True
my_false = False

print(type(my_false))
x = None
print(x , type(x))
x = bool(x)
print(x , type(x))
x = 5
print(x, type(x))
x = str(x)
print(x, type(x))

# how to set in one var multiple string value
verse = '- Это кто упал? Серёжа? \n\
- Нет, не он, - его одёжа. \n\
- Что же стукнула одёжа? \n\
- В середине был Серёжа.'

verse2 = ('- Это кто упал? Серёжа? \n' 
         '- Нет, не он, - его одёжа.\n'
         '- Что же стукнула одёжа?\n'
         '- В середине был Серёжа.\n')

verse3 = '''\
Природа с красоты своей
Покрова снять не позволяет,
И ты машинами не вынудишь у ней,
Чего твой дух не угадает.\
'''

print(verse)
print(verse2)
print(verse3)