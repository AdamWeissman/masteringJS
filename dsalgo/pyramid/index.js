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



  /*
    
    M Y    T E S T    C A S E    E X A M P L E S
   
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


function pyramid(n) {
  
    const numOfHashtagsOnLevel = function(nLevel) {
      let finalNum = -1
      for (let i = 0; i < nLevel; i++) {
        finalNum += 2
      }
      return finalNum
    }
    
    function levelAssembler(spaces, hashtags) {
      const halfOfTheSpaces = new Array(spaces).fill(' ').join(''),
        hashTagsPortion = new Array(hashtags).fill('#').join('')
        
        return halfOfTheSpaces.concat(hashTagsPortion.concat(halfOfTheSpaces))
    }

    for (let index = 1; index <= n; index++) { // index <= n to get the final value
      let numOfSpaces = n - index
      let numOfHashtags = numOfHashtagsOnLevel(index)
      console.log(levelAssembler(numOfSpaces, numOfHashtags))
    } 
  }




module.exports = pyramid;
