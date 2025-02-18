import { useState } from "react"
import Button from "./Button"



function App() {
const [count,setCount] = useState(0);

  return (
    <div className="bg-red-100">
      <Button setCount={setCount}></Button>
    </div>
  )
}

export default App