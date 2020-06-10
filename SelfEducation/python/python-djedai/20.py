# functions to work with string
# join
# replace
# stratswith
# endswith
# lower
# upper
# split
# min
# max
# abs
# sum

fruits = ['Лимоны', 'яблоки', 'бананы', 'груши', 'дыни']
print(' - ' .join(fruits))

# watch for words that you want change
print('Hello, Username' .replace('Username', 'Slava'))

name = input('Your name: ')

if( name.startswith('S') ):
  print('Great! Your name starts from S like superman')
else:
  print('Loh')