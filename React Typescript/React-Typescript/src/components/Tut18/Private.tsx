import { ComponentType } from "react";
import Login from "./Login";
import { ProfileProp } from "./Profile";

type PrivateProps = {
  isLoggedIn : boolean,
  Component : ComponentType<ProfileProp>
}

const Private = ({isLoggedIn,Component} : PrivateProps) => {
  if(isLoggedIn)
    return <Component name='Ayaz' />
  return (
    <div>
      <Login />
    </div>
  );
};

export default Private;