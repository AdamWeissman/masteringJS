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