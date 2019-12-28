/*Make a promises*/
function applyForVisa(documents) {
    console.log('wait...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('Visa denied: lack of' +
                ' documents');
            resolve();
            reject();
            resolve();
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('visa received');
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(visa), 2000)

    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('book hotel confirm');
    return Promise.resolve(visa);
}

function buyTickets(booking) {
    console.log('buy tickets');
    console.log('book', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));

