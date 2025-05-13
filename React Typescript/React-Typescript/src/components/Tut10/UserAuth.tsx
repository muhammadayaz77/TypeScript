import { useState } from "react";
type AuthUser = {
  name : string,
  email : string
}

const UserAuth = () => {
  const [auth,setAuth] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setAuth({
      name : 'ayaz',
      email : 'ayaz@gmail.com'
    })
  }
  const handleLogout = () => {
    setAuth(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h2>Name : {auth?.name || "Not found"}</h2>
      <h2>Email : {auth?.email || "Not found"}</h2>
      <h1>You are {auth ? 'login' : 'logout'}</h1>
    </div>
  );
};

export default UserAuth;