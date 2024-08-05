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
// function factorialRecursion(n: number) {
//   // Factorail formual recursion
//   // n! = n * (n - 1)!

//   if (n === 0) return 1;
//   return n * factorialRecursion(n - 1);
// }

// console.log(factorialRecursion(0));
// console.log(factorialRecursion(1));
// console.log(factorialRecursion(5));
// function power(base: number, exponent: number): number {
//   // Base case: any number raised to the power of 0 is 1
//   // if (exponent === 0) return 1;

//   // Recursive case: base^exponent = base * base^(exponent-1)
//   // return base * power(base, exponent - 1);
//   let result = 1;

//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }

//   return result;
// }

// console.log(power(2, 3)); // Output: 8 (because 2^3 = 8)
// console.log(power(5, 4)); // Output: 625 (because 5^4 = 625)
// console.log(power(7, 0)); // Output: 1 (because any number raised to the power of 0 is 1)

function sumOfDigitsIterative(n: number): number {
  // Your code here
  let result = 0;

  while (n >= 0) {
    result += n + 1;
  }
  return result;
}

// function sumOfDigitsRecursive(n: number): number {
//   // Your code here
// }

console.log(sumOfDigitsIterative(1234)); // Output: 10 (because 1 + 2 + 3 + 4 = 10)
// console.log(sumOfDigitsRecursive(1234)); // Output: 10
// console.log(sumOfDigitsIterative(56789)); // Output: 35 (because 5 + 6 + 7 + 8 + 9 = 35)
// console.log(sumOfDigitsRecursive(56789)); // Output: 35
