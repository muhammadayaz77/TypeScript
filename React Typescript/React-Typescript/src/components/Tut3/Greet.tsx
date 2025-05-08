import { GreetProps } from "../utils/Props.type";

// type GreetProps = {
//   name : string
// }


const Greet = (props : GreetProps) => {
  return (
    <div>
      {
        props.isLoggedIn ? 
        <h1>Welcome Mr.{props.name}! You have {props.countMessage} Messages</h1>
        :
        <h1>HI Guest</h1>
      }
    </div>
  );
};

export default Greet;