"use strict";
// Print Even Numbers
// let num:number = 50;
// for(let i = 0;i<=num;i+=2){
//   console.log(i);
// }
// Print Odd Number
// let num = 50;
// for(let i = 1;i<=num;i+=2){
//   console.log(i)
// }
// Find Odd Number as well Even Number
// let n = 601;
// let FindOdd = (n : number) => {
//   if(n%2 !== 0){
//     console.log('This is Odd Number')
//   }
//   else{
//     console.log('This is Even Number')
//   }
// }
// FindOdd(n);
// Find the prime number
let num = 100;
for (let i = 0; i < num; i++) {
    if (i >= 2) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        else {
            console.log('not prime number');
        }
    }
    else {
        console.log("not prime");
    }
}
