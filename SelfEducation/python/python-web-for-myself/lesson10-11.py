s = 'hello'
s2 = s.capitalize()
print(s,s2)
# here we can count how many letters l in hello, also we can check it in substring
print(s.count('l', 0,3))
print(s.find('l'))

name = 'John'
age = 30

print('My name is %(name)s i\'m %(age)d years old' %{'name': name, 'age': age})
print('Title: %s, Price: %.2f' %('Sony', 40))
print(f'My name is {name} i\'m {age + 3} years old' )