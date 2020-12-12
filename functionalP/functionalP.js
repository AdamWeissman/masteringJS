// no side effects
// input -> output 


const array = [1,2,3]

function removeLastItem(arr) {
  const newArray = [].concat(arr); // creates copy of the array as opposed to mutating it
  newArray.pop() 
  return newArray
}

console.log(removeLastItem(array))

// referential transparency

function a(num1, num2) {
  return num1 + num2
}

function b(num) {
  return num * 2
}


// referential transparency in action below
console.log(b(a(3, 4)))
console.log(b(7))