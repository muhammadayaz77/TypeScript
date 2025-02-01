"use strict";
let arr = [];
let pos = 0;
let maxSize = 5;
function push(num) {
    if (arr.length >= maxSize) {
        console.log('The length is reached');
        return;
    }
    arr[pos] = num;
    pos++;
}
function pop() {
    let newLength = arr.length;
    if (arr.length > 0) {
        arr.length = newLength - 1;
    }
    else {
        console.log('There is no element');
        return;
    }
}
push(1);
push(5);
push(5);
push(5);
pop();
pop();
pop();
// console.log(arr,arr.length);
// ==========>(Reverse A String)<============
let fullname = 'ayaz';
let arrString = fullname.split('');
let lt = arrString.length - 1;
// reverseString(arrString,0,lt);
function reverseString(st, min, max) {
    if (min < max) {
        let temp = st[min];
        st[min] = st[max];
        st[max] = temp;
        return reverseString(st, min + 1, max - 1);
    }
    else {
        return st;
    }
}
let newArr = reverseString(arrString, 0, lt);
fullname = newArr.join();
console.log(fullname);
