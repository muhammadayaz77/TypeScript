type StatusProps = {
  status : 'loading' | 'success'
}

const Status = ({status} : StatusProps) => {
  let message:string;

  if(status === "loading"){
    message = 'loading'
  }else if(status === 'success'){
    message = 'success'
  }
  return (
    <div>Status - {status}</div>
  );
};

export default Status;