// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // Set Starter Array at [0,1]
  // INCREMENT an iterator towards N
  // Assign Left Index at 0 and treat Right Index as iterator at location 1 
  // Add value of left Index to value of right index and append that value
  // set Left Index to Right Index
  // ... next iteration of loop increases right index... 
  // return last element of the array... or array.length (since it should be the same as n)

  let starterArray = [0,1],
    leftIdx = 0

  /* NOTE: leftIdx and rightIdx starting values in starterArray correspond 
    EXACTLY with intiialize values for iteration!!
  */

  for (let rightIdx = 1; rightIdx < n; rightIdx++) {
    const appendMe = starterArray[leftIdx] + starterArray[rightIdx]
    starterArray.push(appendMe)
    leftIdx = rightIdx
  }

  return starterArray[starterArray.length - 1]

}


//console.log(fib(5))

module.exports = fib;