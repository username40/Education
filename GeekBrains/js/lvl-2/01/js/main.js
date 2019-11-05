const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, title: 'Monitor'},
    {id: 6, price: 500},
    {id: 7}
];

/*Андрей, здравствуйте!  Установил значения для функции по умолчанию.
Так же создал несколько карточек чтобы проверить будет ли работать.
Сначала сделал как в старом синтаксисе (вычитал на learn.javascript),
но потом Павел(наставник) подсказал, как сделать так чтобы
это было правильно по новому синтаксису*/
/*Так же я подумал а что если отключить кнопку у тех товаров где
неизвестны название или цена. Получилось не сразу. Без помощи Павла здесь
тоже не обошлось потому что я попытался сделать как по документации
через document.querySelector() и оно отказывалось работать.*/
/*А вот мыслей как улучшить функции сколько не думал, так ничего и в голову не пришло*/
const renderProduct = (title = "no title", price = 0) => {

    if(title === "no title" || price === 0) {
        disableBuyBtn = "disabled";
    } else {
        disableBuyBtn = "";
    }
 
    return `<div class="product-item">
                <img src="https://via.placeholder.com/250.png/ccc">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn" ${disableBuyBtn}>Купить</button>
            </div>`
};

/* Решил 3 задание. Каким образом я пришел к его решению? 
Мне как то не доводилось ранее встречаться с методом .map() поэтому я полез 
гуглить что это и как он работает. В документации вычитал что он возвращает массив, 
а в массиве все элементы разделяются запятой. Я дописал .join('') и запятые исчезли*/
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price)).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);