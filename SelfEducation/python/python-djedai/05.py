# it's not a correct
# a = true
# b = false

# that's correct
c = True
d = False

print(c)
print(d)

# compare
print(10 == 11)
print(10 != 11)
print(10 > 11)
print(10 < 11)
print(10 >= 11)
print(10 <= 11)
print(7 > 7.0)

# lexigraphical compare
# you can compare strings and know what is string has more weight
# all letters in alphabet has index - string sum all indexes and compare with another string
print("Test" > "Tesa")

# conditions
weather = 'winter'
time = 'Утро'

if weather == 'winter':
  print('Now is cold weather - #stayhome')
  if time == 'Ночь':
    print('Go sleep')
  elif time == 'Утро':
    print('Wake up neo')
else:
  print('Go on the street')

spam = 7
if spam > 5:
  print('five')
if spam > 8:
  print('eiqht')