"use strict";
let arr = [1, 2, 3, 5];
let position = 3;
let value = 10;
for (let i = 0; i < arr.length; i++) {
    if (arr.length < i) {
        arr[i + 1] = arr[i];
    }
}
console.log(arr);
