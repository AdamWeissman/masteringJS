const theValue = []

function recursivelyAddedVariable(arry, n = 0, anotherArry = []) {
  if (n < arry.length) {
    //console.log(n)
    anotherArry.push(arry[n])
    console.log(`inside if statemement before recursive call with n equal to '${n}'`)
    n += 1
    recursivelyAddedVariable(arry, n, anotherArry)
  } else if (n == arry.length) {
    console.log("    inside else if")
    theValue.push(...anotherArry)
  }
  console.log(`the array is this ${anotherArry} on iteration ${n}`)
  // return anotherArry
  return("\nthis doesn't need to return so long as data stored elsewhere\n")
}

const testing = ["alpha", "beta", "cappa", "delta"]

const x = recursivelyAddedVariable(testing)
console.log(x)
console.log("this is the value that was altered on the else", theValue)

//NOTE: Below is not recursive but just dumped here for testing.


someArray = [13,14,15,16,17,18]

function chunk(array, n) {
  let chunkedArrays = []
  let tempArray = []
  for (let rightSliderClamp = 0; rightSliderClamp <= array.length; rightSliderClamp++){ // <= array.length to capture last element
    if (tempArray.length == n || rightSliderClamp == array.length ) {
      chunkedArrays.push([...tempArray]) // NEED to use slice, otherwise it returns latest value of tempArray for everything
      tempArray.length = 0
    }
    tempArray.push(array[rightSliderClamp])
  }
  return chunkedArrays
}

console.log(chunk(someArray, 5))