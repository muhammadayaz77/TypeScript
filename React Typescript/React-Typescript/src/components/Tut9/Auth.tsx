import { useState } from "react";

const Auth = () => {
  const [isLogin,setIsLogin] = useState(false)
  const handleLogin = () => {
    setIsLogin(true)
  }
  const handleLogout = () => {
    setIsLogin(false)

  }
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h1>You are {isLogin ? 'login' : 'logout'}</h1>
    </div>
  );
};

export default Auth;