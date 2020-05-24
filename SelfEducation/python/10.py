# self-maded functions

# you can't call function before write it!
def print_spam():
  print('spam')
  print('spam')
  print('spam')
  print('spam')

print_spam()

def multiply(number):
  print(number * 2)

multiply(4)

def max(x, y):
  if x > y:
    return x
  elif x < y:
    return y
  else:
    print('same')

x = input('Number 1: ')
y = input('Number 2: ')

print(max(x,y))
