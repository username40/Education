/*To-Do.*/

var myNodeList = document.getElementsByTagName('li');

// просто создаем крестики чтобы можно было удалять задачи
for (var i = 0; i < myNodeList.length; i++) {
    var span = document.createElement('span');
    var closeSymbol = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(closeSymbol);
    myNodeList[i].appendChild(span);

}

// Удаляем задачи из списка.
var close = document.getElementsByClassName('close');

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

// Закрываем задачи, ставим их отмеченными, по клику.
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newTask() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue.length === 0) {
        alert('полне не может быть пустым');
    } else {
        document.getElementById('myUl').appendChild(li);
        var span = document.createElement('span');
        var closeSymbol = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(closeSymbol);
        li.appendChild(span)
    }

    document.getElementById('myInput').value = '';

    var span = document.createElement('span');
    var closeSymbol = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(closeSymbol);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}