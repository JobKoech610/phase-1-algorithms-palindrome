// Write a function isPalindrome that will receive one argument, a string.
//  Your function should return true if the string is a palindrome
//   (that is, if it reads the same forwards and backwards, like "mom" or "racecar"),
//    and return false if it is not a palindrome.

function reverseString(word){
  // const split = word.split('');
  // const reverse = split.reverse();
  // const join = reverse.join('');
  // return join

  //clean code
  return word.split('').reverse().join('')
}
function isPalindrome(word) {
  // Write your algorithm here

const reversedWord = reverseString(word);
  // compare the reversed string to the input
  // if (word === reversedWord){
  //   return true;

  // }else 
  // return false;
//clean code.
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  mom===mom // true
  father === rehtaf //false
  - write a function that accept one inputs/argurment 
  -the argurment should be a string
  -split a string into characters
  -use reverse () method to reserve the array.
  -join the characters
NOTE: there is no built-in method for reversing a string in javascript directly.

  - check strict equality of the input word and reversed word (expected output true /false)

  if (word===reverseString)
  return true
  else
  return false


*/

/*
  Add written explanation of your solution here
  -created a function with reverse a string
  -then created another a function to check if strict equality of the input word and the reversed word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
