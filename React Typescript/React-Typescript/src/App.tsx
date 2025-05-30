import UserAuth from "./components/Tut10/UserAuth"
import TypeAssertion from "./components/Tut11/TypeAssertion"
import DomRef from "./components/Tut16/DomRef"
import Private from "./components/Tut18/Private"
import Profile from "./components/Tut18/Profile"
import List from "./components/Tut19/List"
import Greet from "./components/Tut3/Greet"
import Person from "./components/Tut4/Person"
import PersonList from "./components/Tut4/PersonList"
import Heading from "./components/Tut5/Heading"
import Oscer from "./components/Tut5/Oscer"
import Status from "./components/Tut5/Status"
import Button from "./components/Tut6/Button"
import StyleCss from './components/Tut7/StyleCss'
import Auth from "./components/Tut9/Auth"

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
      {/* Tut - =====(7)===== */}
      <StyleCss styles={{fontSize : "50px",color : 'red'}} />
      {/* Tut - =====(9)===== */}
      <Auth />
      {/* Tut - =====(10)===== */}
      <UserAuth />
      {/* Tut - =====(11)===== */}
      <TypeAssertion />
      {/* Tut - =====(16)===== */}
      <DomRef />
      {/* Tut - =====(18)===== */}
      <Private isLoggedIn={true} Component={Profile}  />
      {/* Tut - =====(19)===== */}
      {/* <List list={['ayaz','khan']} />
      <List list={[1,2]} /> */}
      <List
  list={[
    {
      name: 'ayaz',
      class: 9,
    },
    {
      name: 'ali',
      class: 10,
    },
  ]}
  renderItem={(item) => (
    <p>
      Name: {item.name}, Class: {item.class}
    </p>
  )}
/>

    </div>
  )
}

export default App