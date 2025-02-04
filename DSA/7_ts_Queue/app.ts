
// First In Last Out
let arr:number[] = [];


const Queue = (arr : number[],num:number):void => {
    
      let ind = arr.length;
      arr[ind] = num;
     
    console.log(arr)
}
const Dequeue = () => {
    if(arr.length > 0){
      for(let i = 0;i<arr.length;i++){
        arr[i] = arr[i+1];
      }
      arr.length-=1
    }
    else{
      console.log('Empty Array')
    }
}

Queue(arr,10)
Queue(arr,20)
Queue(arr,30)
Queue(arr,40)
Dequeue()
Dequeue()
Dequeue()
Dequeue()
Dequeue()
console.log(arr)