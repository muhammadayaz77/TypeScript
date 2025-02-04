"use strict";
let arr = [];
const Queue = (arr, num) => {
    let ind = arr.length;
    arr[ind] = num;
    console.log(arr);
};
const Dequeue = () => {
    arr.length -= 1;
};
Queue(arr, 10);
Queue(arr, 20);
Queue(arr, 30);
Queue(arr, 40);
Dequeue();
Dequeue();
Dequeue();
console.log(arr);
