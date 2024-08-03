function factorial(n) {
  const zeroFactorial = 1;
  if (n < 0) {
    return zeroFactorial;
  }

  let resultFactorial = 1;

  for (let i = 1; i <= n; i++) {
    console.log("For loop i:", i);
    resultFactorial = resultFactorial * i;
  }
  return resultFactorial;
}

// console.log(factorial(0));
console.log("Result: ", factorial(5));
