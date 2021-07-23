// for creating interface use keyword interface
interface Ilength {
  length: number;
}

function getLength(variable:Ilength): void {
  console.log('getLength', variable.length);
  
}

const box = {
  name: 'Slava',
  length: 20
}

getLength(box)

// interfaces create for templating like abstract class
// ?: it means not necessery parameter
interface IUser {
  name: string;
  age ?: number;
  logInfo(info:string): void;
}

//const interfaceUser: IUser = {
//  name: 'Slava',
//}

// you can use interface not only for creating objects
// for heir classes you should write extends
// for heir interface you should write implements
// you can implements from many interfaces
// you can extends only from one class
class UserfromInterface implements IUser, Ilength {
  name: string = 'userName'
  length: number = 50
  logInfo(info: string): void {
    console.log(info);
  }
}