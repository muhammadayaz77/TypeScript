import { useEffect, useState } from "react"
import Button from "./Button"
import {  Color } from "./lib/types";



function App() {
const [count,setCount] = useState(0);
type C = {
  color : Color
}

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then((data : unknown) => console.log(data))
  },[])
  return (
    <div className="bg-red-100">
        <Button count={count} countHistory={[10,20]}></Button>
    </div>
  )
}

export default App