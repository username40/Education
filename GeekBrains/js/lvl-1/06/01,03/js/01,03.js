"use strict";
/*
* 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие большой
* картинки по указанному в src адресу. Если такой картинки не существует или она не доступна, то должна
* ставиться картинка-заглушка сообщающая об ошибке.
*/
/*
* 3*. Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки
* должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена изображения на
* следующее или предыдущее.
*/

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 * @property {string} settings.nextImgArrowSrc Путь до картинки со стрелкой вправо
 * @property {string} settings.nextIngArrowClass Класс картинки со стрелкой вправо
 * @property {string} settings.previousImgArrowSrc Путь до картинки со стрелкой влево
 * @property {string} settings.previousArrowClass Класс картинки со стрелкой влево
 * @property {string} settings.imgNotFoundSrc Путь до картинки c ошибкой.
 */
const gallery = {
  openedImageEl: null,
  settings: {
    previewSelector: '.mySuperGallery',
    openedImageWrapperClass: 'galleryWrapper',
    openedImageClass: 'galleryWrapper__image',
    openedImageScreenClass: 'galleryWrapper__screen',
    openedImageCloseBtnClass: 'galleryWrapper__close',
    openedImageCloseBtnSrc: 'images/gallery/close.png',
    nextImgArrowSrc: 'images/arrows/next.svg',
    nextImgArrowClass: 'galleryWrapper__next',
    previousImgArrowSrc: 'images/arrows/previous.svg',
    previousArrowClass: 'galleryWrapper__back',
    imgNotFoundSrc: 'images/gallery/404.jpg',
  },

  /**
   * Инициализирует галерею, ставит обработчик события.
   * @param {Object} userSettings Объект настроек для галереи.
   */
  init(userSettings = {}) {
    // Записываем настройки, которые передал пользователь в наши настройки.
    Object.assign(this.settings, userSettings);

    // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
    // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
    // gallery и передадим туда событие MouseEvent, которое случилось.
    document
      .querySelector(this.settings.previewSelector)
      .addEventListener('click', event => this.containerClickHandler(event));
  },

  /**
   * Обработчик события клика для открытия картинки.
   * @param {MouseEvent} event Событие клики мышью.
   * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
   */
  containerClickHandler(event) {
    // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
    if (event.target.tagName !== 'IMG') {
      return;
    }
    this.openedImageEl = event.target;
    //открываем картинку с полученным из целевого тега(data_full_image_url аттрибут)
    this.openImage(event.target.dataset.full_image_url);
  },

  /**
   * Открывает картинку.
   * @param {string} src Ссылка на картинку, которую надо открыть.
   */
  openImage(src) {
    // Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src.
    this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
  },

  /**
   * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
   * @returns {Element}
   */
  getScreenContainer() {
    // Получаем контейнер для открытой картинки.
    const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
    // Если контейнер для открытой картинки существует - возвращаем его.
    if (galleryWrapperElement) {
      return galleryWrapperElement;
    }

    // Возвращаем полученный из метода createScreenContainer контейнер.
    return this.createScreenContainer();
  },

  /**
   * Создает контейнер для открытой картинки.
   * @returns {HTMLElement}
   */
  createScreenContainer: function () {
    // Создаем сам контейнер-обертку и ставим ему класс.
    const galleryWrapperElement = document.createElement('div');
    galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

    //Кнопка влево
    const prevBtn = new Image();
    prevBtn.classList.add(this.settings.previousArrowClass);
    prevBtn.src = this.settings.previousImgArrowSrc;
    galleryWrapperElement.appendChild(prevBtn);

    prevBtn.addEventListener('click', () => {
      this.openedImageEl = this.getPrevImage();
      this.openImage(this.openedImageEl.dataset.full_image_url);
    });

    //Кнопка вправо
    const nextBtn = new Image();
    nextBtn.classList.add(this.settings.nextImgArrowClass);
    nextBtn.src = this.settings.nextImgArrowSrc;
    galleryWrapperElement.appendChild(nextBtn);

    nextBtn.addEventListener('click', () => {
      this.openedImageEl = this.getNextImage();
      this.openImage(this.openedImageEl.dataset.full_image_url);
    });

    // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
    const galleryScreenElement = document.createElement('div');
    galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
    galleryWrapperElement.appendChild(galleryScreenElement);

    // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
    const closeImageElement = new Image();
    closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
    closeImageElement.src = this.settings.openedImageCloseBtnSrc;
    closeImageElement.addEventListener('click', () => this.close());
    galleryWrapperElement.appendChild(closeImageElement);

    // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
    const image = new Image();
    image.classList.add(this.settings.openedImageClass);
    galleryWrapperElement.appendChild(image);
    image.onerror = () => image.src = this.settings.imgNotFoundSrc;

    // Добавляем контейнер-обертку в тег body.
    document.body.appendChild(galleryWrapperElement);

    // Возвращаем добавленный в body элемент, наш контейнер-обертку.
    return galleryWrapperElement;
  },
  /**
   * Возвращает следующий элемент (картинку) от открытой или первый элемент (картинку) в контейнере
   * если текущая открытая картинка последняя.
   * проще говоря работает по принципу "карусель"
   * @returns {Element} Следующую картинку от текущей открытой
   */
  getNextImage() {
    const nextSibling = this.openedImageEl.nextElementSibling;
    return nextSibling ? nextSibling : this.openedImageEl.parentNode.firstElementChild;
  },
  /**
   * Возвращает предыдущий элемент (картинку) от открытой или последний элемент (картинку) в контейнере
   * если текущая открытая картинка первая.
   * проще говоря работает по принципу "карусель"
   * @returns {Element} Предыдущую картинку от открытой
   */
  getPrevImage() {
    const prevSibling = this.openedImageEl.previousElementSibling;
    return prevSibling ? prevSibling : this.openedImageEl.parentNode.lastElementChild;

  },



  /**
   * Закрывает (удаляет) контейнер для открытой картинки.
   */
  close() {
    document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
  }
};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});