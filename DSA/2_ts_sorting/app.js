"use strict";
// LESSON # SORTING
let array = [2, 63, 26, 266, 353, 2653, 93, 63, 2, 63, 39];
for (let i = 0; i < array.length, i++;) {
    for (let j = 0; j < array.length; j++) {
        if(array[j]>array[j+1])
        {
          let temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          break;
        }
    }
}

console.log(array)