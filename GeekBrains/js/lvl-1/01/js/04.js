'use strict';

/*
  * 4. Самостоятельно разобраться с атрибутами тега script (async и defer), описать комментариями для чего они,
  * чем отличаются.
  *
  * async - браузер грузит скрипт параллельно вместе с парсингом страницы и может быть выполнен сразу же
  * после того как загрузится, независимо от того что скрипт загружен.
  *
	* defer - скрипт грузится параллельно но его выполнение отложено до того как страница не закончит формироваться.
	* Так же если используется несколько скриптовых файлов тут тоже есть разница - в async первым грузится тот
	* который быстрее загрузится, а в defer они будут грузится в том порядке в котором записаны в html документе.
 */

