# exception

# types of errors
#  ImportError - wrong import for example inport lib which not installed
#  IndexError - for example try to get access to cell of list which doesn't exist
#  NameError - for example try to use variable which doesn't exist
#  ZeroDivisionError - for example print(7 / 0)
#  SyntaxError
#  TypeError
#  ValueError

try:
  print(7 / 0)
except ZeroDivisionError:
  # you can do something if you catch error
  # print('Поймано исключение деление на 0')
  # or you can miss it
  pass

print('Программа завершена')

try:
  print(7 / 0)
except:
  # you can catch any errors
  print('Поймано исключение')

print('finish')

try: 
  # but you can't catch syntaxError
  # only use eval
  eval('print(7 / 4)a')
except SyntaxError:
  print('Поймано исключение синтаксическая ошибка')
# finally make something in any case
finally:
  print('конец поимки')

try:
  print(10 / 0)
except(ZeroDivisionError, SyntaxError, TypeError):
  print('Поймано одно из этих исключений')

# you can create your own excepts
try:
  weather = 'Плохая'
  if weather == 'Плохая':
    raise TypeError
except TypeError:
  print('TypeError!!!')