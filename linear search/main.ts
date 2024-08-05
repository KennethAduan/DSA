function linearSearch(numbers: number[], target: number) {
  //   return numbers.indexOf(target);

  const result = numbers.indexOf(target);
  if (!result) return -1;

  return result;
  //   for (const num of numbers) {
  //     if (numbers[num] === target) {
  //       return num;
  //     }
  //   }
  //   return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
