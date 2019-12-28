/*********************************************/
/*Переменные.*/
// Именование переменных в переменных можгут содержаться буквы цифры $ и _ .
// Первый символ не должен быть цифрой, название переменной может начинаться с буквы _ или $ .

// Зарезервированные имена.
/* Нельзя называть переменные следующими словами - break case catch class const continue debugger default delete do
 else enum export extends false finally for function if implements import in instanceof interface let new package
  private protected public return static super switch this throw true try typeof var void while with yield.*/

// Регистр играет важную роль.
// Популярный в JS способ именования переменных т.н. lowerCamelCase.
// Хоть и можно называть переменную с $ лучше так не делать - обычно такое именование используют для написания
// библиотек и резервируются для DOM узлов.
// Константы как и в php называют большими буквами через _ MY_SUPER_CONST.
var number = 10;
var string = 'hello';
alert(string);
var user = 'Slava',age= 31, message = 'hello';