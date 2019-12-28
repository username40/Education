/*Iterators*/
/*
let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
    console.log(xman);
}
*/
// Symbol.iterator is a function
/*
console.log(typeof xmen[Symbol.iterator]); // Cyclops Wolverine Rogue function
console.log(xmen[Symbol.iterator]()); // Array Iterator {}

*/
/*
let iterator = xmen[Symbol.iterator]();
*/
/*
console.log(iterator.next()); // {value: "Cyclops", done: false}
console.log(iterator.next()); // {value: "Wolverine", done: false}
console.log(iterator.next()); // {value: "Rogue", done: false}
console.log(iterator.next()); // {value: undefined, done: true}
console.log(iterator.next()); // {value: undefined, done: true}
*/
/*
console.log(iterator.length); // undefined


let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
*/
/*
let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    }
  [Symbol.iterator]() {
      let count = 0;
      return {
          next() {
              let value = Math.ceil(Math.random() * 100);
              let done = count > 9;
              count += 1;
              return {value, done};
          }
      };
  }
};

for (let random of randomGenerator) {
    console.log(random);
}

let random = randomGenerator.generate();

console.log(random.next().value);
*/

class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = {
            value: undefined,
            done: true
        };
        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index +=1;
        }

        return result;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let taskList = new TaskList();
taskList.addTasks('learn JS', 'learn VUEJS', 'learn AngularJS', 'learn' +
    ' ReactJS');

for(let task of taskList) {
    console.log(task);
}

