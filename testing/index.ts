// function removeDuplicates(numbers: number[]) {
//   //   let newArrayNumbers = [];

//   return numbers.filter((item, index) => numbers.indexOf(item) === index);
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([5, 5, 5, 5, 5])); // Output: [5]
// function reverseString(word: string) {
//   // Your code here
//   return word.toLowerCase().split("").reverse().join("");
// }

// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
// function findSecondLargest(numbers: number[]) {
//   // Your code here
//   const secondMaxNumber = numbers.reduce((a, b) => {
//     return Math.max(a, b);
//   });
//   return secondMaxNumber - 1;
// }

// console.log(findSecondLargest([1, 3, 4, 5, 0, 2])); // Output: 4
// console.log(findSecondLargest([10, 9, 8, 8, 7])); // Output: 9

// function countWords(words: string) {
//   // Your code here
//   return words.toLowerCase().split(" ").length;
// }

// console.log(countWords("This is a test ")); // Output: 4
// console.log(countWords("Hello world!")); // Output: 2

function isPrime(number: number) {
  // Your code here

  if (number < 2) {
    return false;
  }

  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      return true;
    } else return false;
  }

  return true;
}

console.log(isPrime(5)); // Output: true
console.log(isPrime(4)); // Output: false