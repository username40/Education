# cycles

test = True

while test:
  print('привет!')
  test = False

i = 0

while i <= 5:
  print(i)
  i = i + 1

z = 3

while z <= 0:
  print(z)
  z = z - 1

y = 1

while 1 == 1:
  print('Hello! ', str(y))
  y = y + 1
  if y == 11:
    print('Program is finished!')
    # you can stop this nightmare use break
    break

number = 0

while number <= 1000:
  number += 1
  if (number % 2) != 0:
    # or you can continue it
    continue;
  print('Четное число' + str(number))