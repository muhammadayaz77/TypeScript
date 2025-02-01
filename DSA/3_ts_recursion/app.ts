const factorial = (num: number | null | undefined): number | undefined | null => {
  if (num === null || num === undefined) {
    console.log("Number is not correct");
    return null;
  }
  
  if (num === 0) return 1;

  let result = factorial(num - 1) ?? 1;
  return num * result
};

console.log(factorial(5)); // Output: 120
console.log(factorial(null)); // Logs "Number is not correct" and returns null
console.log(factorial(undefined)); // Logs "Number is not correct" and returns null
