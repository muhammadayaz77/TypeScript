// type GreetProps = {
//   name : string
// }

interface GreetProps{
  name : string,
  countMessage : number,
  isLoggedIn : boolean
}


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