


// function removeFirstOrder<T>(arr:Array<T>) : Array<T>{
//   arr.shift();
//   return arr;
// }

// removeFirstOrder([1,3,5,6]);
// removeFirstOrder(['ayaz','khan']);



// interface Burger<T>{
//   size : T,
//   price : number,
// }

// let myBur : Burger<number> = {
//   size : 3,
//   price : 10
// }
// let myBur1 : Burger<string> = {
//   size : 'ayaz',
//   price : 10
// }




// class Burger<T>{
//   size : T;
//   price : number;
//   constructor(size : T,price : number){
//     this.size = size;
//     this.price = price;
//   }
// }

// let burger1 = new Burger('large',1100)
// let burger2 = new Burger(10,1100)

// console.log(burger1,burger2)



// let retVal = <T>(num:T):T =>{
//   return num
// }


// retVal(10);
// retVal('ayaz');


interface Bur<U,V>{
  first : U,
  second : V
}

let f1 : Bur<string,number> = {
  first : 'ayaz',
  second : 10
}
let f2 : Bur<boolean,string> = {
  first : true,
  second : 'ayaz'
}