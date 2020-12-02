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

const getMedian = (word) {
  if (getEvenOrOdd(word) == 'even') {
      evens = [],
      num = word.length / 2
      evens.push(num, num + 1)
      return evens
  } else {
      odd = []
      num = (word.length / 2) + 1
      odd.push(num)
      return odd
  }
}


console.log("Even", getMedian(testStringEven), "Odd", getMedian(testStringOdd))
