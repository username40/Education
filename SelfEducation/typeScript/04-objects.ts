 // if you need set type object you can do this
 // you can write type of value in object not depends at order
 // (like in arrays)
 // you can write it in any order
 let user: {jobs: Array<string>,name: string, logName: () => void, age: number} = {
   name: 'Slava',
   age: 34,
   jobs: ['a', 'b'],
   logName():void {
     console.log(this.name);
   }
 }

 // for avoid voilation DRY better way to create custom type
 // if you have a not necessary field you can write ?: before type
type User = {jobs: Array<string>,name: string, logName: () => void, age: number, num?: number}


 // smell DRY violation
 let user2: User = {
  name: 'Julia',
  age: 34,
  num: 100,
  jobs: ['a', 'b'],
  logName():void {
    console.log(this.name);
  }
}

let user3: User = {
  name: 'Julia',
  age: 34,
  jobs: ['a', 'b'],
  logName():void {
    console.log(this.name);
  }
}

