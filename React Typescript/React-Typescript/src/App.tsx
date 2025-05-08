import Greet from "./components/Tut3/Greet"
import Person from "./components/Tut4/Person"
import PersonList from "./components/Tut4/PersonList"
import Heading from "./components/Tut5/Heading"
import Oscer from "./components/Tut5/Oscer"
import Status from "./components/Tut5/Status"
import Button from "./components/Tut6/Button"

function App() {
  const name = {
    first : "Muhammad",
    last : "Ayaz"
  }
  const namesList = [
    {
    first : 'Muh1',
    last : 'Aya1'
  },
    {
    first : 'Muh2',
    last : 'Aya2'
  },
    {
    first : 'Muh3',
    last : 'Aya3'
  },
]
  return (
    <div>
      <Greet name='Ayaz' countMessage={10} isLoggedIn={true} />
      <Person name={name} />
      <PersonList names={namesList} />
      {/* Tut - =====(5)===== */}
      <Status status='loading' />
      <Heading><Oscer /></Heading>
      {/* Tut - =====(6)===== */}
      <Button
      onChangeHandler={(e) => {
        console.log(e)
      }}
      onClickHandler={(e) => {
        console.log('clicked',e)
      }} />
    </div>
  )
}

export default App