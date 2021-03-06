'use strict';

/*
* 3**. На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать миллионером?».
* Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь методы, например
* метод run, возможно метод init и т.д.
* В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
* Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
* ответов в виде теста, например:
* Сколько букв в слове "привет":
* a. Пять.
* b. Шесть.
* c. Семь.
* d. Куда я попал?
* Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
* По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
* сыграть снова.
* Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
*/

/**
 * @type {object[]} Массив с объектами вопросов.
 */
const questions = [
  {
    text: 'Загадка первая',
    variants: {
      'a': 'Правильный ответ',
      'b': 'Неверный ответ',
      'c': 'Совсем неверный ответ',
      'd': 'Очень, очень плохой ответ',
    },
    correctAnswerIndex: 'a',
  },
  {
    text: 'Загадка вторая',
    variants: {
      'a': 'Совсем неверный ответ',
      'b': 'Очень, очень плохой ответ',
      'c': 'Правильный ответ',
      'd': 'Неверный ответ',
    },
    correctAnswerIndex: 'c',
  },
  {
    text: 'Загадка третья',
    variants: {
      'a': 'Очень, очень плохой ответ',
      'b': 'Неверный ответ',
      'c': 'Совсем неверный ответ',
      'd': 'Правильный ответ',
    },
    correctAnswerIndex: 'd',
  },
  {
    text: 'Загадка четвертая',
    variants: {
      'a': 'Совсем неверный ответ',
      'b': 'Правильный ответ',
      'c': 'Неверный ответ',
      'd': 'Очень, очень плохой ответ',
    },
    correctAnswerIndex: 'b',
  },
  {
    text: 'Загадка пятая',
    variants: {
      'a': 'Правильный ответ',
      'b': 'Очень, очень плохой ответ',
      'c': 'Совсем неверный ответ',
      'd': 'Неверный ответ',
    },
    correctAnswerIndex: 'a',
  },
];

/**
 * @property {questions} questions Массив с объектами вопросов.
 * @property {int} scoreCount Счетчик правильных ответов.
 * @property {int} questionIndex Индекс текущего вопроса.
 */
const game = {
  questions,
  scoreCount: 0,
  questionIndex: 0,

  /**
   * Инициализация игры.
   */
  init() {
    this.scoreCount = 0;
    this.questionIndex = 0;
  },

  /**
   * Запуск игры.
   */
  run() {
    // Инициализируем все значения.
    this.init();
    // Приветствие пользователя.
    alert('Здравствуйте, добро пожаловать в игру "Кто хочет стать миллионером".');
    // В бесконечном цикле запускаем игру.
    while (true) {
      // Получаем ответ от пользователя.
      const answer = this.getAnswer();

      // Если пользователь захотел выйти - выходим.
      if (this.userWantExit(answer)) {
        alert('До свидания.');
        break;
      }

      // Определяем правильно ответил пользователь или нет на игру.
      if (this.isAnswerCorrect(answer)) {
        alert('Это правильный ответ!');
        this.scoreCount++;
      } else {
        alert('К сожалению, это ошибка.');
      }

      // Ставим следующий индекс вопроса.
      this.questionIndex++;

      // Если игра закончена.
      if (this.isGameOver()) {
        // Сообщаем счет.
        alert(`Ваш счет: ${this.scoreCount}.`);
        // Если пользователь не хочет сыграть игру еще раз - выходим.
        if (!confirm('Хотите сыграть еще одну игру?')) {
          break;
        }
        // Если пользователь согласился еще раз сыграть - инициализируем снова переменные.
        this.init();
      }
    }
  },

  /**
   * Получаем ответ от пользователя.
   * @returns {string} Строка ответа пользователя.
   */
  getAnswer() {
    while (true) {
      // Получаем ответ от пользователя на текст загадки.
      let answer = prompt(this.getCurrentQuestionString());

      // Если пользователь нажал закрыть окно промпта.
      if (answer === null) {
        alert('Если вы хотите выйти наберите "выход".');
        continue;
      }

      // Если пользователь нажал ОК, чистим пробелы по бокам текста, делаем маленький регистр.
      answer = answer.trim().toLowerCase();

      // Если пользователь ответил что-то левое, то заходим в if.
      if (!this.validateAnswer(answer)) {
        alert('Необходимо выбрать один из предложенных вариантов ответа.');
        continue;
      }

      // Возвращаем ответ пользователя.
      return answer;
    }
  },

  /**
   * Возвращает строку с текущим вопросом и вариантами ответов.
   * @returns {string} Строку с текущим вопросом и вариантами ответов.
   */
  getCurrentQuestionString() {
    const question = this.questions[this.questionIndex];

    // Начинаем собирать строку с вопросом пользователя.
    let questionString = `Вопрос: ${question.text} \n\nВарианты ответов:\n`;
    // Добавляем к вопросу варианты ответов.
    for (const key in question.variants) {
      if (question.variants.hasOwnProperty(key)) {
        questionString += `${key} - ${question.variants[key]}\n`;
      }
    }

    // Возвращаем строку с вопросом и вариантами ответов.
    return questionString;
  },

  /**
   * Проверяем ответ пользователя на корректность ввода.
   * @param {string} userAnswer Ответ пользователя.
   * @returns {boolean} true если пользователь ввел корректные данные, иначе false.
   */
  validateAnswer(userAnswer) {
    // Если пользователь ввел одну из команд из массива, вернем true, иначе false.
    return ['exit', 'a', 'b', 'c', 'd'].includes(userAnswer);
  },

  /**
   * Проверяет ввел ли пользователь вместо ответа информацию для выхода из игры.
   * @param {string} userAnswer Ответ пользователя.
   * @returns {boolean} true, если пользователь хотел выйти, false если нет.
   */
  userWantExit(userAnswer) {
    return userAnswer === 'exit';
  },

  /**
   * Проверяет является ли ответ, переданный в функцию верным.
   * @param {string} userAnswer Ответ пользователя.
   * @returns {boolean} true, если ответ пользователя верный, false если нет.
   */
  isAnswerCorrect(userAnswer) {
    return this.questions[this.questionIndex].correctAnswerIndex === userAnswer;
  },

  /**
   * Проверяет закончилась ли игра.
   * @returns {boolean} true, если было задано 5 вопросов, иначе false.
   */
  isGameOver() {
    return this.questionIndex > 4;
  }
};

// Запускаем игру.
game.run();