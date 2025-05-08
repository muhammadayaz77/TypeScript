
type ButtonProps = {
  onClickHandler : (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onChangeHandler : (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Button(props : ButtonProps) {
  return (
    <div>
      <button onClick={props.onClickHandler}>click</button>
      <input type="text" onChange={props.onChangeHandler} />
    </div>
  )
}

export default Button