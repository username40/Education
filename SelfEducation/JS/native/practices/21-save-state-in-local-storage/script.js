var state = {
    items: []
};

var data = localStorage.getItem('data');
if (data) {
    state = JSON.parse(data);
}



window.addEventListener('load', function() {
    var button = document.querySelector('button');
    var list = document.querySelector('ul');
    var input = document.querySelector('input');

    update();

    function update() {
        list.innerHTML = '';
        for (var i = 0; i < state.items.length; i++) {
            var el = document.createElement('li');
            el.innerHTML = state.items[i];
            list.appendChild(el)
        }
        /*
        el.innerHTML = l;
        list.appendChild(el);
        input.value = '';
        
        */
    }

    button.addEventListener('click', function() {
        var l = input.value;
        state.items.push(l);
        update();
        localStorage.setItem('data', JSON.stringify(state));
    })
})