"use strict";
function removeFirstOrder(arr) {
    arr.shift();
    return arr;
}
removeFirstOrder([1, 3, 5, 6]);
removeFirstOrder(['ayaz', 'khan']);
// interface Burger<T>{
//   size : T,
//   price : number,
// }
// let myBur : Burger<number> = {
//   size : 3,
//   price : 10
// }
class Burger {
    constructor(size, price) {
        this.size = size;
        this.price = price;
    }
}
let burger1 = new Burger('large', 1100);
let burger2 = new Burger(10, 1100);
console.log(burger1, burger2);
