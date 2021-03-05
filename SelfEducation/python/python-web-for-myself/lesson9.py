# auto concatenate strings
py = 'py' 'thon'
print(py) # python

w1 = 'Hello, '
w2 = 'World!'

w3 = w1 + w2

print(w3)

name = 'Slava'
age = 33

# print('Hello! My name is ' + name + ' I\'m ' + age + ' years old') you can't concat srt & int

print('Hello! My name is ' + name + ' I\'m ' + str(age) + ' years old')

s = 'hello world!'

print(s[0:12]) # hello world!
print(s[-1]) # !
print(s[0:5]) # hello
print(s[:5]) # hello
print(s[6:]) # world!
print(s[::2]) # hlowrd
print(s[::-1]) # !dlrow olleh
print(s[:5] + s[6:]) # helloworld!