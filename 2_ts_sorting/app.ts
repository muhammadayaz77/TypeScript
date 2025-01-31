// LESSON # BUBBLE SORTING


let array:number[] = [2,3,5,7,9]
let swap:boolean = false;

for(let i = 0;i<array.length;i++){
  console.log("for outer : ",i)
  for(let j = 0;j<array.length;j++)
  {
    if(array[j]>array[j+1])
      {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        swap = true;
      }
  }
  if(!swap)
  {
    break;
  }
}
console.log(array);


