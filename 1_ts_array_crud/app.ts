
// Insert a value 

// let arr = [1,2,3,5];

// let data = 4;
// let position = data - 1;
// let value = 10;

// for(let i = arr.length - 1;i >= 0;i--){

//   if(position <= i){
//     arr[i+1] = arr[i];
//     if(i == position){
//       arr[i] = value;
//     }
//   }
// }
// console.log(arr);


// DELETE BY POSITION

// let arr = [1,2,3,5];

// let postion = 4;
// postion-=1
// for(let i = postion;i<arr.length;i++){
//   arr[i] = arr[i+1];
// }
// arr.length -= 1;

// console.log(arr);
// console.log(arr.length);


// SEARCH A VALUE

// let arr = [1,2,3,5];

// let find = 5;
// let position:number = -1;

// for(let i = 0;i<arr.length;i++){
//   if(arr[i] === find){
//     position = i;
//   }
// }

// console.log(position + 1)



// MERGE TWO ARRAYS    

let arr1 = [1,2,3,5];
let arr2 = [6,7,8,9];
let resArr:number[] = [];

for(let i = 0;i<arr1.length;i++){
  resArr[i] = arr1[i];
}

for(let i = 0;i<arr2.length;i++){
  resArr[arr2.length + i] = arr2[i];
}

console.log(resArr)