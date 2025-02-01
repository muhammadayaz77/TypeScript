"use strict";
// LESSON # 01
// TUPLE
// FIXED LENGTH ARRAY 
let arr = [1, "ayaz", 2];
let mySize = 1 /* Size.medium */;
// console.log(mySize)
// LESSON # 03 
// FUNCTIONS 
function calculateTax(income, tax) {
    // let x;
    console.log(income, tax);
    return income + tax;
}
console.log(calculateTax(10, 10));
// LESSON # 04
// OBJECTS
let Student = {
    id: 1,
    // name : 'ayaz'
    retire: (date) => {
        console.log(date);
    }
};
// Student.id = 113;
Student.retire(new Date());
