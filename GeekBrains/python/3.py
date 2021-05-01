# 1.
# Реализовать функцию, принимающую два числа (позиционные аргументы) и выполняющую их деление.
# Числа запрашивать у пользователя, предусмотреть обработку ситуации деления на ноль.

def split_function(first_number, second_number):
    first = int(first_number)
    second = int(second_number)
    if (first == 0):
        return 0
    if (second == 0):
        return 'Деление на ноль невозможно!'
    else:
        return first / second


print(split_function(1, 2))
print(split_function(15, 52))
print(split_function(0, 2))
print(split_function(3, 0))
print(split_function(0, 0))


######################################################################################
# 2.
# Реализовать функцию, принимающую несколько параметров, описывающих данные пользователя:
# имя, фамилия, год рождения, город проживания, email, телефон.
# Функция должна принимать параметры как именованные аргументы.
# Реализовать вывод данных о пользователе одной строкой.

def your_info(first_name, last_name, birth_year, email, phone):
    return f'{last_name} {first_name}  {birth_year} {email} {phone}'


print(your_info(first_name='Joe', last_name='Daw', birth_year=1970, email='v@v.com', phone='+79001111111'))


######################################################################################
# 3.
# Реализовать функцию my_func(), которая принимает три позиционных аргумента,
# и возвращает сумму наибольших двух аргументов.

def my_func(one, two, three):
    args_list = [one, two, three]
    args_list.sort(reverse=True)
    return args_list[0] + args_list[1]

print(my_func(70,3,11))


######################################################################################
# 6. Реализовать функцию int_func(), принимающую слово из маленьких латинских букв и возвращающую его же,
# но с прописной первой буквой. Например, print(int_func(‘text’)) -> Text.

int_func = lambda text: text.capitalize()

print(int_func('python'))

# Продолжить работу над заданием.
# В программу должна попадать строка из слов, разделенных пробелом.
# Каждое слово состоит из латинских букв в нижнем регистре.
# Сделать вывод исходной строки, но каждое слово должно начинаться с заглавной буквы.
# Необходимо использовать написанную ранее функцию int_func().

def int_many_words(text):
    splitted = text.split()
    new_list = []
    for i in splitted:
        i = int_func(i)
        new_list.append(i)
    result = ' '.join(new_list)
    return result
    # а вообще конечно было бы проще использовать title()
    # return text.title()

print(int_many_words('python python2 python3'))
