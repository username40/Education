/*Classes*/

// In ES6 has a classes for oop

class Task {
    constructor(title = Task.getDefaultTitle()) {
// propertiess add only in constructor
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('tusk generated right now');
    }

    get done() {
        return this._done === true ? 'DONE' : 'IN PROGRESS';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value
        } else {
            console.log('error write true or false value');
        }
    }
// don't use , between methods this is a error
    complete() {
        this._done = true;
        console.log(`task ${this.title} is DONE!!!`);
    }

// static methods use for helper functions
    static getDefaultTitle() {
        return 'name of task';
    }
}

//static properties and methods
// static properties it's class owned, not for objects created his basics
// static properties usually use for save static information
// you can't use static properties use keyword static
// for example if you write it inside class:
// static let count = o; // error
// You must write it only after class
// like here:
Task.count = 0;



let task = new Task('learn es6');
let task2 = new Task('learn js');
let task3 = new Task('learn vue');
let task4 = new Task('learn angular');
let task5 = new Task('learn react');
let task6 = new Task('learn node.js');
let task7 = new Task();



// console.log(typeof Task); // function
// console.log(typeof task); // object
// console.log(task instanceof Task); // true
console.log(task.title);
console.log(task2.title);
task2.complete();
console.log(task3.title);
console.log(task4.title);
console.log(task5.title);
console.log(task6.title);
console.log(task7.title);

// you can't get default title because you write in title something
// task.getDefaultTitle(); // Uncaught TypeError: task.getDefaultTitle is not a
// function

console.log(Task.count); // 6
task7.complete();

