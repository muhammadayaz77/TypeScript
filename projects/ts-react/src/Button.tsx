

interface buttonProps<T> {
  count : T,
  countHistory : T[]
    
}

// const convertToArray = <T,>(val : T):T[] => {
//   return [val]
// }
// convertToArray('hi')
// convertToArray(5)

function Button<T>({count,countHistory} : buttonProps<T>) {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}
 
export default Button