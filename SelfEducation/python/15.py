# assert
# you can check some conditions with assert
# def abc(text):
  # this condition means that text is necessary argument
  # and if not transfer it you have Assertion Error
  # assert text != ''
  # print(str(text))

# abc('!!!')

# work with files
# 2 params 1 file name 2 mode - r default
# file = open('text.txt', 'r')
# print(file.read())
# there is 3 ways of read files
# r - read file
# w - rewrite file
# a - add file
# one more 
# b - binary mode
# after reading close file
# file.close()
# it needs to avoid leak of memory

# fileName = input('Какой файл: ')
# fopen = open(fileName, 'r')

# print('Количество символов в данном файле - ' + str(len(fopen.read())))

# file.close()
# file = open('text.txt', 'w')

# file.write('Hello Python!')
# file.close()

# fname = input('Имя файла? ')
# fcontent = input('что туда написать? ')

# f = open(fname, 'w')
# f.write(fcontent)
# f.close()


# usernameFile = open('username.txt', 'r')

# in this case number is a quantity of bytes that will be read
# print(usernameFile.read(3))

fileName1 = input('which file you want to backup?: ')
fileName2 = 'backup_' + fileName1

# here you can see that i used 'b' after r and w
# It means that i use binary mode
# use this mode i can complete not only text - i can copy audio video images etc files
file1 = open(fileName1, 'rb')
file2 = open(fileName2, 'wb')

file2.write( file1.read() )

file1.close()
file2.close()

print('backup succeful compete!')