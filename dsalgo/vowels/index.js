// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   vowels = ["a","e","i","o","u"]
//   the_string = str.toLowerCase()
//   counter = 0
//   for (let i of the_string.split("")) {
//     if (vowels.includes(i)) {
//       counter+=1;
//     }
//   }
//   return counter
// }

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0;
// }

 // MY STEPS FOR 12/8 BELOW
  // ITERATE through the string
  // ASSIGN a key for each letter and SET its value to 1 
    // or INCREMENT by 1
  // RETURN the sum of the values 

function vowels(str) {
  str.toLowerCase()

  const obj = {}

  str.split('').forEach(
    (element) => {
      if (element.match(/[aeiou]/gi)) {
        obj[element]? obj[element] = 1 : obj[element] = 1
      } else {
        obj[element]? obj[element] = 0 : obj[element] = 0
      }
    } 
  )

  return Object.values(obj).reduce((total, currentVal) => total + currentVal) 
}


module.exports = vowels;