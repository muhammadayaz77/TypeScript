import Greet from "./components/Tut3/Greet"
import Person from "./components/Tut4/Person"

function App() {
  const name = {
    first : "Muhammad",
    last : "Ayaz"
  }
  return (
    <div>
      <Greet name='Ayaz' countMessage={10} isLoggedIn={true} />
      <Person name={name} />
    </div>
  )
}

export default App