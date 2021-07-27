// decorator is a function that get function and do something
function log(constrFn: Function) {
  console.log(constrFn);
}

function shouldLog(flag:boolean): any {
  return flag ? log : null
}


// use @ to add decorator to your code
// in decorator you can't put params
@shouldLog(true)
class DecoratorUser {
  constructor(public name: string, public age: number) {
    console.log('hello TS i am new decorator User');
  }
}


function addShowAbility(constructorFn:Function) {
  constructorFn.prototype.showHtml = function () {
    const pre = document.createElement('pre')
    pre.innerHTML = JSON.stringify(this)
    document.body.appendChild(pre)
  }
}


@addShowAbility
class DecoratorUserSecond {
  constructor(public name: string, public age: number, public job: string) {
    console.log('hello TS i am new decorator User');
  }
}

let decUser = new DecoratorUserSecond('Slava', 34, 'Frontend')
console.log(decUser);

// it's a hack because you can't call showHtml() direct from here
(<any>decUser).showHtml()