// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  
    /*
    
    
    CALL a function to calculate:
      how many hashtags, how many spaces, and how many spaces on left or right
      In other words... A FORMULA that determines how many occupied spaces on any given level
      
      EXAMPLE ONE:
        ONE LEVEL has 1#, no spaces -- spaces is equivalent to number of levels - 1

      EXAMPLE TWO:
        ONE LEVEL #1, leftSpace 4, RightSpace 4 -- spaces is equivalent to number of levels - 1
        TWO LEVEL #3, leftSpace 3, RightSpace 3 -- spaces is equivalent to number of levels - 2
        THREE LEVEL #5, leftSpace: 2 RightSpace 2  -- spaces is equivalent to number of levels - 3
        FOUR LEVEL #7, leftSpace: 1 RightSpace 1 -- spaces is equivalent to number of levels - 4
        FIVE LEVEL: #:9 leftSpace: 0  RightSpace 0 -- spaces is equivalent to number of levels - 5

      EXAMPLE THREE:
        ONE LEVEL - #1, leftSpace 2, RightSpace 2 -- spaces is equivalent to number of levels - 1
        TWO LEVEL - #3, leftSpace 1, RightSpace 1 -- spaces is equivalent to number of levels - 2
        THREE LEVEL - #5, leftSpace: 0 RightSpace 0  -- spaces is equivalent to number of levels - 3

    */

    const numOfCharactersOnFinalLevel = function(nLevel) {
      let finalNum = -1
      for (let i = 0; i < nLevel; i++) {
        finalNum += 2
      }
      return finalNum
    }
  
    function levelAssembler(spaces, hashtags) {
      const halfOfTheSpaces = new Array(spaces / 2).fill(' ').join(''),
        hashTagsPortion = new Array(howManyHashtags).fill('#').join('')
        return halfOfTheSpaces.concat(hashTagsPortion.concat(halfOfTheSpaces))
    }

}

console.log("5 levels", pyramid(5))

module.exports = pyramid;
