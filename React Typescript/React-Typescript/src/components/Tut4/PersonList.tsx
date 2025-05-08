type PersonListProps = {
  names : {
    first : string,
    last : string
  }[]
}

const PersonList = ({names} : PersonListProps) => {
  return (
    <div>
      {
        names.map(name => (
          <h1>{name.first} , {name.last}</h1>
        ))
      }
    </div>
  );
};

export default PersonList;