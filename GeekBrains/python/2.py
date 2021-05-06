import random

# 1
# Создать список и заполнить его элементами различных типов данных.
# Реализовать скрипт проверки типа данных каждого элемента.
# Использовать функцию type() для проверки типа.
# Элементы списка можно не запрашивать у пользователя, а указать явно, в программе.

created_list = [123, 3.14, 'Test!', True]

# здесь конечно можно было в функцию обернуть на случай если нужно будет подсовывать на обработку разные списки
for el in created_list:
    print(type(el))

###################################################################################
###################################################################################

# 2
# Для списка реализовать обмен значений соседних элементов.
# Значениями обмениваются элементы с индексами 0 и 1, 2 и 3 и т. д.
# При нечётном количестве элементов последний сохранить на своём месте.
# Для заполнения списка элементов нужно использовать функцию input().

# я подумал как бы мне через 1 инпут сделать кучу элементов в списке,
# определить ручками и через список while добавлять по одному, у меня терпения уже после 3-го закончится
# и тут мне в голову пришла мысль генерить случайное число и делать список каждый раз разной длины
# как это сделать нашел тут https://ps.readthedocs.io/ru/latest/random.html
inputSomething = input('say something ')
randomNumber = int(random.randint(1, 100))
print(f'randomNumber is {randomNumber}')

counter = 0
task2_list = []
for el in range(randomNumber):
    task2_list.append(f'{inputSomething} {counter}')
    counter += 1


# список готов

# здесь и далее логичнее обращаться к переменной randomNumber чтобы понять длину списка
# ведь она и есть длина, можно конечно делать через len(task2_list) но тогда интерпретатору придется сначала
# посчитать его длину а только потом сделать операцию. Экономия на спичках но тем неменее

# мне кажется проще вынести такую логику в функцию чтобы избежать DRY
# постоянно чешется список массивом назвать и писать все через camelCase))
def swap_list(list, lenght):
    # тут все довольно просто - есть итератор, пока он меньше длины
    # мы через множественное присваивание меняем переменные местами
    i = 0
    while i < lenght:
        list[i], list[i + 1] = list[i + 1], list[i]
        i += 2
    # и возвращаем измененный список
    return list


if randomNumber % 2 == 0:
    print(swap_list(task2_list, randomNumber))

# да, такое тоже бывает ))
if randomNumber == 1:
    print(task2_list)

if randomNumber % 2 != 0:
    # ничего умнее кроме как выдергивать последний элемент...
    last_element = task2_list[-1]
    task2_list.pop()
    modified_list = swap_list(task2_list, randomNumber - 1)
    # и подсовывать его в конец отсортированного списка я не придумал
    modified_list.append(last_element)
    print(modified_list)

###################################################################################
###################################################################################

# 3
# Пользователь вводит месяц в виде целого числа от 1 до 12.
# Сообщить, к какому времени года относится месяц (зима, весна, лето, осень).
# Напишите решения через list и dict.

# впринципе ключом для словаря может быть и строка, но везде расставлять кавычки дорого по времени
# проще здесь к числу привести
month = int(input('введите номер месяца (от 1 до 12) '))

year_dictionary = {
    1: 'зима',
    2: 'весна',
    3: 'лето',
    4: 'осень',
}

# сгребаем сезоны в список
year_list = list(year_dictionary.values())

if month >= 1 and month <= 12:
    if month == 12 or month == 1 or month == 2:
        print(year_dictionary.get(1), year_list[0])
    if month == 3 or month == 4 or month == 5:
        print(year_dictionary.get(2), year_list[1])
    if month == 6 or month == 7 or month == 8:
        print(year_dictionary.get(3), year_list[2])
    if month == 9 or month == 10 or month == 11:
        print(year_dictionary.get(4), year_list[3])
else:
    print('Необходимо ввести от 1 до 12')

###################################################################################
###################################################################################

# 4
# Пользователь вводит строку из нескольких слов, разделённых пробелами.
# Вывести каждое слово с новой строки.
# Строки нужно пронумеровать.
# Если слово длинное, выводить только первые 10 букв в слове.

input_your_text = input('say something again: ')

splitted = input_your_text.split(' ')
sliced = []

# не увидел особого смысла проверять каждое слово на длину, решил сразу все резать а там что отрежется
# то отрежется)))
for el in splitted:
    sliced.append(el[:10])

new_lines = '\n'.join(sliced)

print(new_lines)