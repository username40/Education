const os = require('os')

// платформа
console.log(os.platform());

// архитектура
console.log(os.arch());

// инфо о ЦПУ
console.log(os.cpus());

// количество свободной памяти
console.log(os.freemem());

// всего памяти
console.log(os.totalmem());

// домашняя директория
console.log(os.homedir());

// сколько работает ОС 
console.log(os.uptime());