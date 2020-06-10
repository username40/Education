# format strings
# you don't need use more concat strings

name = 'Jetman'
age = 33

person_name = 'Username'
person_age = 33

human = {
  'name': 'Slava',
  'age': 33
}
# most popular
# %s - insert string
# %d - insert number
# %f - insert fractal (33.5)

print('Hello, %s! Yor age is %d' %(name, age))

print('Hello, {}! Yor age is {}' .format(name, age))
# number of arguments start from 0
print('Hello, {0}! Yor age is {1}' .format(name, age))
# naming
print('Hello, {name}! Yor age is {age}' .format(name = person_name, age = person_age))
print('Hello, {person[name]}! Yor age is {person[age]}' .format(person = human))
print('{0}{1}{0}' .format('abra', 'cad'))

input_str = 'word'

print('{0:*^28}' .format(input_str))
print('{0:*<28}' .format(input_str))
print('{0:*>28}' .format(input_str))