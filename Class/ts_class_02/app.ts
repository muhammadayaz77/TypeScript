// LESSON # 01
// TUPLE
// FIXED LENGTH ARRAY 

let arr:[number,string,number] = [1,"ayaz",2]
// console.log(arr)

// arr[0].toFixed()
// arr[1].replace()


// LESSON # 02
// ENUM 
// LIST OF RELATED CONTSTANT 
//ADD CONSTANT FOR BETTER JAVASCRIPT
const enum Size{small,medium,large}

let mySize:Size = Size.medium;
// console.log(mySize)



// LESSON # 03 
// FUNCTIONS 

function calculateTax(income : number,tax : number):number{
  // let x;
  console.log(income,tax);
  return income + tax;
}

console.log(calculateTax(10,10))


// LESSON # 04
// OBJECTS

let Student : {
  readonly id : number,
  name ?: string,
  retire : (data:Date) => void
} = {
  id : 1,
  // name : 'ayaz'
  retire : (date:Date) => {
    console.log(date)
  }
}


// Student.id = 113;

Student.retire(new Date())