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
    Need to TRACK
      n (total levels in pyramid)
      total hashtags on final level
      what level at any given time (ITERATE to do this)
      hashtags on a level
      total spaces on a level
        left spaces
        right spaces
    
    CALL a function to calculate:
      how many hashtags, how many spaces, and how many spaces on left or right
      In other words... A FORMULA that determines how many occupied spaces on any given level
      ... for starters
      ONE LEVEL has 1#, no spaces
      TWO LEVELS has 3#, spaced dependent on final level
      THREE LEVELS HAS 5#
      FOUR LEVELS HAS 7#
      FIVE LEVELS HAS 9#
      SIX LEVELS HAS 11#
       seems like possible to iterate through levels, and depending on the level 

    CALL a function to ASSIGN the total number of characters on the final level

    Any given level should RETURN
      CALL a function to COMBINE left spaces, number of hashtags, right spaces

  
      
    */

    const numOfCharactersOnFinalLevel = function(nLevel) {
      let finalNum = -1
      for (let i = 0; i < nLevel; i++) {
        finalNum += 2
      }
      return finalNum
    }
  
    return numOfCharactersOnFinalLevel(n)
}

console.log("5 levels", pyramid(5))

module.exports = pyramid;
