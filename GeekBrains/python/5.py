# 1
# Создать программно файл в текстовом формате, записать в него построчно данные, вводимые пользователем.
# Об окончании ввода данных свидетельствует пустая строка.

file = open('1.txt', 'w')
input_text = input('input text ')
while input_text:
    file.writelines(input_text)
    input_text = input('input text ')
    if not input_text:
        break
        file.close()

# 2.
# Создать текстовый файл (не программно), сохранить в нем несколько строк,
# выполнить подсчет количества строк, количества слов в каждой строке.

my_f = open("2.txt", "r")
content = my_f.readlines()
my_f.close()
print(f'file 2.txt has {len(content)} lines')

list_of_lists = []

for i in range(len(content)):
    list_element = content[i].split()
    list_of_lists.append(list_element)
    print(f'in string {i + 1} {len(list_of_lists[i])} words')

# 4.
# Создать (не программно) текстовый файл со следующим содержимым:
# One — 1
# Two — 2
# Three — 3
# Four — 4
# Необходимо написать программу, открывающую файл на чтение и считывающую построчно данные.
# При этом английские числительные должны заменяться на русские.
# Новый блок строк должен записываться в новый текстовый файл.

four_translit = {'One' : 'Один', 'Two' : 'Два', 'Three' : 'Три', 'Four' : 'Четыре'}
target_file = []
with open('4.txt') as four_file:
    for i in four_file:
        i = i.split(' ', 2)
        target_file.append(f'{four_translit[i[0]]} — {i[2]}')

with open('4-1.txt', 'w') as four_file_target:
    four_file_target.writelines(target_file)
# там какая то "дичь" после тире появляется вЂ” не понял откуда это вообще идет и как побороть
# пришлось ее вообще выпиливать из нашего уравнения, заменил на обычное тире

# 5.
# Создать (программно) текстовый файл, записать в него программно набор чисел, разделенных пробелами.
# Программа должна подсчитывать сумму чисел в файле и выводить ее на экран.

five_file = open("5.txt", "r")
five_content = five_file.read().split()
five_file.close()

five_list_of_ints = [int(item) for item in five_content]

five_result = sum(five_list_of_ints)
print(five_result)