// to run this file from main directory...
// node ./dsalgo/s7almostPalindrome.js

console.log("RUNNING ALMOST PALINDROME")


function cleanUp(x) {
  return x.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
}

function validSubPalindrome(str, l, r) {
  while (l < r) {
    if (str[l] !== str[r]) {
      return false
    }
    l++;
    r--;
  }
  return true
}

function almostPalindrome(someString) {
  const word = cleanUp(someString)
  let left = 0,
    right = word.length - 1
  
  while (left < right) {
    if (word[left] !== word[right]) {
      return validSubPalindrome(word, left + 1, right) || validSubPalindrome(word, left, right - 1) 
    }
    left++;
    right--;
  }

}

console.log(almostPalindrome("hehveh"))