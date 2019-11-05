'use strict';
/*
* 2. Реализовать модуль корзины. У каждого товара есть кнопка «Купить», при нажатии на которую
* происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать
* общую сумму заказа. Один товар можно добавить несколько раз.
*/

/**
 * @property {object} settings - Настройки корзины товаров
 * @property {{price: number, name: string}[]} goods - Список товаров, что купил пользователь
 * @property {HTMLElement} basketcountElements - место для показа количества товаров
 * @property {HTMLElement} basketpriceElements - место для показа цены всех товаров
 * */
const basket = {
  settings: {
    countSelector: '#basket-count',
    priceSelector: '#basket-price',
  },
  goods: [],
  countEl: null,
  priceEl: null,

  /**
   * Инициализирует переменные для корзины и показывает эти значения
   * Можно ввести свои данные и они в settings перепишутся
   * @param settings
   */
  init(settings = {}) {
    this.settings = Object.assign(this.settings, settings);
    this.countEl = document.querySelector(this.settings.countSelector);
    this.priceEl = document.querySelector(this.settings.priceSelector);
    this.render();
  },
  /**
   * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров
   * @param goodName - Название товара
   * @param goodPrice - Цена товара
   */
  add(goodName, goodPrice){
    this.goods.push({name: goodName, price: goodPrice});
    this.render();
  },

  /**
   * Отображает количество всех товаров и их цену
   */
  render() {
    this.countEl.textContent = this.goods.length;
    this.priceEl.textContent = this.getGoodsPrice();
  },

  /**
   * считает и отображает количество всех товаров из массива this.goods
   * @returns {number} - Цену всех купленных товаров
   */
  getGoodsPrice() {
    let cost = 0;
    for (const good of this.goods) {
      cost += good.price;
    }
    return cost;
  }

};

window.onload = () => basket.init();

document.querySelectorAll('.buy').forEach(el => {
  el.addEventListener('click', e => {
    basket.add(e.target.dataset.name, +e.target.dataset.price);

  })
});
