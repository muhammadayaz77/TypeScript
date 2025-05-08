type StyleProps = {
  styles : React.CSSProperties
}

const Index = ({styles} : StyleProps) => {
  return (
    <div>
      <h1 style={styles}>This is css style</h1>
    </div>
  );
};

export default Index;