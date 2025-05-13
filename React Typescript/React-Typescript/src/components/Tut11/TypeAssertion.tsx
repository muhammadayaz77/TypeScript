import { useState } from "react";

type AuthProps = {
  name : string,
  email : string
}

const TypeAssertion = () => {
  let [auth,setAuth] = useState<AuthProps>({} as AuthProps)
  let login = () => {
    setAuth({
      name : 'ayaz',
      email : 'A@a.com'
    })
  }
  // let setErr = () => {
  //   setAuth({})
  // }
  return (
    <div>
      <h1>Name : {auth?.name}</h1>
      <button onClick={login}>Login</button>
      {/* <button onClick={setErr}>Set Undefine</button> */}
    </div>
  );
};

export default TypeAssertion;