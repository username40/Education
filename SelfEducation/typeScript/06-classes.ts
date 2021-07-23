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
  //modifiers available not only in methods
  // default public
  private getAge(): number {
    return this.age
  }

  // this is a way to access to private field
  public setTitle(title: boolean) {
    console.log(this.isTeacher);
    this.isTeacher = title
    console.log(this.isTeacher);
  }

}

const newUser = new UserClass('Slava', 'frontend')
console.log(newUser);
newUser.setTitle(false)
//console.log(newUser.getAge()); // not available becuase private
