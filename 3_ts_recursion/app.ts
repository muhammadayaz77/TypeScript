const factorial = (num: number | null | undefined): number | null => {
  if (num === null || num === undefined) {
    console.log("Number is not correct");
    return null;
  }

  if (num === 0) return 1;

  const result = factorial(num - 1) ?? 1; // Ensure a valid number for multiplication
  return num * result;
};

console.log(factorial(5)); // Output: 120
console.log(factorial(null)); // Logs error and returns null
console.log(factorial(undefined)); // Logs error and returns null
