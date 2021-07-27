// for creating namespace use keyword namespace
// namespaces uses for creating scope and hide it for global vision
namespace Util {
  // you can't call this function while not export it
  export function isEmpty(d:any): boolean {
    return !d;
  }
  
  function isUndefined(d:any): boolean {
    return typeof d === 'undefined';
  }
  
  export const PI = Math.PI;
  const EXP = Math.E;
}


console.log(Util.isEmpty(''));
console.log(Util.isEmpty('hi!'));

// also if you hide something in name space you can create something with the same name in global scope
const PI = Math.PI
console.log(PI);
console.log(Util.PI);



