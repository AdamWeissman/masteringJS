// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }


function steps(n) {
    /* 
                      DONE with iteration track the level (row)
    track the column
    track number of #s
    track number of ' 's
                      PROVEN  a call to a function that will deduct "the level from n" to return the number of spaces
                      PROVEN  if n is 5, then...
                      PROVEN  level 1: 1 #s and 4 spaces (n - level returns the number of spaces)
                      PROVEN  level 2: 2 #s and 3 spaces (n - level return number of spaces)
    call to a function that adds a hash for each ... this can actually be combined into one
    */

    function numOfSpacesAndHashtags(level) { // this is within the scope of n
      const howManySpaces = n - 1,
        howManyHashtags = level + 1 //adding one to deal with indexing issues here

      const spacesPortion = new Array(howManySpaces).fill(' ').join(''),
        hashTagsPortion = new Array(howManyHashtags).fill('#').join('')

        return hashTagsPortion.concat(spacesPortion)
    }

    for (let level = 0; level < n; level++) {
      console.log(numOfSpacesAndHashtags(level))
    }
}

module.exports = steps;
