function genericGetter<T>(data:T): T {
  return data
}


console.log(genericGetter<string>('Slava').length);
// it will be a error
// when we make function and put in number
// automatically data type set in <T>
// and it set everywhere in function
// and function no have .length
// console.log(genericGetter(100).length); // error
// when you put data in this function generic check available methods for it

console.log(genericGetter<number>(100));

// you can write in generic <T extends number> and you can't after it put there strings
// or you can write <T extends number | string> and take only str || num
class Mult <T> {
  constructor (private a: T, private b: T) {}

  public getResult(): number {
    return +this.a * +this.b
  }
}

const varTypes = new Mult('10', '5')
console.log('Number ', varTypes.getResult());
// generic can help dynamically change dataType and check it everywhere