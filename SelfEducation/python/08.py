# lists
list = [1, 2, 3, [4, 5, 6]]

# you can find any element also if it puted in list inside list
print(list[3][2])

# you can duplicate your list
print(list * 2)

word = 'Hello'

# you can find a letter inside a word - in this case it will be a l
print(word[2])

names = ['Slava', 'Julia']

# you can check in list has this word or not
if 'Slava' in names:
  print('Slava in list!')

# also you can made inversion
if 'Denis' not in names:
  print('Denis is not in list')

emptyArr = []

print(emptyArr)

# you can append in the end of list!
emptyArr.append('hello!')

print(emptyArr)

lenArr = [7,4,1,8,5,2,9,6,3]

# you can check lenght of list! this function returns int! You can't concat int and strings! you can change it to str
print('In this harray has ' + str(len(lenArr)) + ' elements')

# you can remove this value from your list
lenArr.remove(8)

print('In this harray has ' + str(len(lenArr)) + ' elements')

insertArr = [1,2,3]

# you can insert into list - 1st write number of position 2nd write what you want to insert
insertArr.insert(0, 4)

print(insertArr)

insertArr.insert(2, 4)

print(insertArr)

maxArr = [1,2,3]

# you can find max value of array
print(max(maxArr))
# you can find min value of array
print(min(maxArr))

countArr = [1,2,3,4,5,6,7,6,5,4,3,2,3,4,5,6,7,8,7,6,5,4,3,2,3,4,5,6,7,8,6,5,4]

# count how many 4 in this array
print(countArr.count(4))

# you can reverse your array
reverseArr = [1,2,3,4,5,6,7,8,9]
reverseArr.reverse()
# [9, 8, 7, 6, 5, 4, 3, 2, 1]
print(reverseArr)