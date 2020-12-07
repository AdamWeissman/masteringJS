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
    numOfSpaces = 1
    totalSteps = new Array(n).fill('#')
    for (let level = 1; level < totalSteps.length; level++) {
      levelArray = [].concat(totalSteps[level - 1])
      console.log(levelArray)  
    }
  


}




module.exports = steps;
