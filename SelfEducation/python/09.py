# ranges

# range() return iterable object
# for creating a real list you make cover it into list()

# make from 0 to 99
numbers = list(range(100))
# make from 50 to 99
numbers2 = list(range(50, 100))
# make from 0 to 98 with step 2 0,2,4,6,8...
numbers3 = list(range(0, 100, 2))

print(numbers3)

numbers4 = [1, 2, 3, 4, 5, 6, 7]

i = 0
length = len(numbers4) - 1

while i <= length:
  print(numbers4[i])
  i += 1

for element in numbers4:
  print(str(element) + '!')

# also you can create manually counter for cicles
for element in range(15):
  print('Hello!')

list = [1,1,2,3,5,8,13]
print(list[list[4]])