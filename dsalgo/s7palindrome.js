// to run this file from main directory...
// node ./dsalgo/s7palindrome.js

console.log("RUNNING PALINDROME")

/*

  Main Problem in Context of Input:
    -Edge Cases
  Sub Problems in Terms of Intermediary Steps:
    -When to Enter a Loop and With What
    -When to Exit a Loop and With What
    -Things to Keep Track Of
    -Inputs and Outputs
  Final Output:

*/


const testStringEven = "deed"; testStringOdd = "abcba"

const getEvenOrOdd = (word) => {
  return (word.length % 2 == 0) ? "even" : "odd" // if return is not included this declaration returns undefined
}

const getMedianIndexes = (word) => {
  if (getEvenOrOdd(word) == 'even') {
      evens = [],
      num = word.length / 2
      evens.push(num - 1, num) // -1 for index
      return evens
  } else {
      odd = []
      num = (word.length - 1) / 2 // -1 for index
      odd.push(num)
      return odd
  }
}

function cleanUp(x) {
  return x.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
}


function twoPointerExpandingPalindrome(thang) {
  const word = cleanUp(thang)
  let medianIndex = getMedianIndexes(word)
  console.log(medianIndex)
  let leftIdx = medianIndex[0],
    rightIdx = medianIndex[1] || medianIndex[0];

  console.log(word[leftIdx], word[rightIdx])
  while (rightIdx < word.length) {
    if (word[leftIdx] != word[rightIdx]) {
      return false
    } else {
      leftIdx--;
      rightIdx++;
    }
  }

  return true
}


//console.log("Even", getMedianIndexes("bb"), "Odd", getMedianIndexes("a"))
console.log(twoPointerExpandingPalindrome("A man, a plan, a canal: Panama"))



console.log(Math.floor(6 / 2))
// ugh ... could've used Math.floor for indexing instead of odds and evens custom method
// initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
//  let left = Math.floor(s.length / 2), right = left;
    

// if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
// if(s.length % 2 === 0) {
//   left--;
//  }