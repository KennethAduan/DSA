// Fibonacci number
// function recursiveFibonacci(n: number) {
//   if (n < 2) return n;

//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));
// console.log(recursiveFibonacci(7));

// Factorial function
function factorialRecursion(n: number) {
  // Factorail formual recursion
  // n! = n * (n - 1)!

  if (n === 0) return 1;
  return n * factorialRecursion(n - 1);
}

console.log(factorialRecursion(0));
console.log(factorialRecursion(1));
console.log(factorialRecursion(5));
