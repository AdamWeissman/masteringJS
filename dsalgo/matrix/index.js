// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


/*

  You start with "N" and that will transform into a spiral matrix
  ASSIGN or TRACK the number of elements in the array by squaring N 
    and/or ITERATE UP
  Keep TRACK or the ROW
  Keep TRACK of the COLUMN

  SOME EXAMPLES -
    n = 2
    create two arrays, fill each array with n columns
    [[1, 2],
    [4, 3]]

    Iterate to n ** 2
    populate the first row until column INDEX is length of the row
    populate the last column


    n = 4
    create four arrays, fill each array with n columns
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]


*/


function matrix(n) {

  function maketheTable(n) {
    const theTable = []
    for (let i = 1; i <= n; i++) {
      theTable.push(new Array(n).fill(0))
    }
    return theTable
  }

  let spiralIterator = 1
  while (spiralIterator < n ** 2) {
    spiralIterator += 1
  }



  const theTable = maketheTable(n)

  theTable.forEach((row) => {
    console.log(row)
  })

  //return theTable

}

console.log(matrix(5))


module.exports = matrix;
