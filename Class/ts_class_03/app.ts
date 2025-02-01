//CLASS NO # 01
// TOPIC : TYPE ALIASES

type Customer = {
  readonly id ?: number,
  name : string,
}

let object_id: Customer = {
  id : 10,
  name:'ayaz'
}

console.log(object_id)


//CLASS NO # 02
// TOPIC : INTERSECTION TYPES

type Product = {
  product_id : number
}

type UIWidget = Customer & Product;

let data : UIWidget = {
  product_id : 10,
  name : 'khan'
}

console.log(data)

//CLASS NO # 03
// TOPIC : UNION TYPES

let unique_name : number | string = 10


//CLASS NO # 04
// TOPIC : TYPE LITERAL

let quantity : 50 | 100 = 50;


//CLASS NO # 05
// TOPIC : NULLABLE TYPE


function calculate(name : string | null | undefined){
  console.log(name)
}

calculate(null);

