def hello():
  # this is doc string you can write it if you need tell about how works your function
  # you can do it in comments but you can't call it in future
  '''Выводит'''
  print('hello')

hello()

# but docstring you can call use name of function after . after write special construction __doc__
print(hello.__doc__)

def first(name):
  print('Hello, ' + name())

# you can transfer functions like a arguments
def second():
  return ':::' + input('Введите имя: ') + ':::'

first(second)