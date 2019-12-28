/*Inheritance*/

class Task {
    constructor(title) {
        this._title = title;
        this. done = false;
        console.log('create task');
        Task.count += 1;
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
         return 'task'
    }
    complete() {
        this.done = true;
        console.log(`${this._title} is done`);
    }
}

Task.count = 0;


// keyword extends use when you need inheritance from other class
class SubTask extends Task{
    constructor(title) {
        super(title); // now you call parent class constructor
        // super must be on 1st line
        console.log('create sub task')
    }

    complete() {
        super.complete();
        console.log(`Sub task ${this._title} is done`);
    }
}

let task = new Task('learn es6');
let subTask = new SubTask('learn js');

task.complete();
subTask.complete();

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);


console.log(task); // create task
console.log(subTask); // create task
console.log(subTask instanceof SubTask); // true