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

// function isPrime(number: number) {
//   // Your code here

//   if (number < 2) {
//     return false;
//   }

//   for (let i = 0; i < number; i++) {
//     if (number % i == 0) {
//       return true;
//     } else return false;
//   }

//   return true;
// }

// console.log(isPrime(5)); // Output: true
// console.log(isPrime(4)); // Output: false
// function twoSum(nums: number[], target: number) {
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums[j] + nums[j - i] === target) {
//         return [j - i, j];
//       }
//     }
//   }
//   return []; // Empty array if no solution found
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// function isPalindrome(x: number): boolean {
//   const convert = Number(x.toString().split("").reverse().join(""));

//   if (convert === x) {
//     return true;
//   }

//   return false;
// }

// console.log(isPalindrome(121));
function isPalindrome(x: number): boolean {
  // Handle negative numbers and numbers ending in 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;

  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Handle odd length palindromes
  return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121)); // Output: true
