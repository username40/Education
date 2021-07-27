class UserClass {
  name: string; // default modificator public
  private isTeacher?: boolean; // not available outside class
  protected age: number = 30; // copy of class not avilable, but available for heirs
  // you can do it in anotherway
  //public job: string;
  
  // in construncror you can write modifier and variable creates automatically
  // and put value there
  constructor(name: string, public job: string) {
    this.name = name
  }

  public getAge(): number {
    return this.age
  }

}

class Created extends UserClass {

  // if you extends some class you must use parent costructor while you don't have constructor here
  constructor(job: string) {
    super('Viacheslav', job);
    this.age = 100
  }
  // you can rewrite parent methods but you can't change type data of return
  getAge(): number {
    return this.age * 2
  }
}

const newUser = new UserClass('Slava', 'frontend')
console.log(newUser);

const createdUser = new Created('Front');

console.log(createdUser);
console.log(createdUser.getAge());


// abstract classes need only for extending (heir)
// main idea of abstract classes to create template for child classes like interface
abstract class Car {
  model?: string;
  year: number = 2010;

  getCarYear(): number {
    return this.year
  }

  // anstract functions write without body
  abstract logInfo(info: string): void;
}

class Mercedes extends Car {
  logInfo(info: string): void {
    console.log(info);
    
  }
}

const car = new Mercedes()
car.logInfo('info about car')
console.log(car.getCarYear());

console.log(car);
