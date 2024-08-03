function fibonacci(n) {
  const numbers = [0, 1];
  if (n > 0) {
    for (let i = 2; i < n; i++) {
      numbers[i] = numbers[i - 1] + numbers[i - 2];
    }
  }
  return numbers;
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
