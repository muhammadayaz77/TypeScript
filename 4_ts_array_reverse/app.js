"use strict";
let reverseAnArray = (data, start, end) => {
    if (data == undefined) {
        console.log("Data array is not Good");
        return undefined;
    }
    if (start <= end) {
        let temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        reverseAnArray(data, start + 1, end - 1);
    }
    else {
        return data;
    }
};
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseAnArray(array, 0, array.length - 1));
