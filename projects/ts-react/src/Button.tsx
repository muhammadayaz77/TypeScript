

interface buttonProps {
  setCount : React.Dispatch<React.SetStateAction<number>>
    
}

function Button({setCount} : buttonProps) {
  setCount(1)
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default Button