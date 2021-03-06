// const obj = {
//   name: 'Adam',
//   items: []
// }


// const obj2 = {
//   items2: ["a", "b", "c"]
// }

// const obj3 = {
//   items3: ["d", "e", "f"]
// }


// const combined = obj2.items2.reduce((acc, val) => {
//   return acc + val
// }, obj3.items3.join(''))


// console.log(combined)

// console.log(["a","e","d"].join(''))



const compose = (outerFunction, innerFunction) => (...bunchOfFunctions) => outerFunction(innerFunction(...bunchOfFunctions))

const crazyArrays = {
  "onThisArray": [10,20,30,40,50],
  "andThisArray": [1000,2000,3000,4000,5000]
}

function runSomeFunctions(...fns) {
  return fns.reduce(compose)
}

function mapTimesTwoForTheOnThisArray(obj, k, r) {
  const updatedArray = [].concat(obj.onThisArray.map((x) => x * 2))
  console.log(updatedArray)
  console.log(k)
  console.log(r)
  return Object.assign({}, obj, { onThisArray: updatedArray })
}

function mapTimesThreeForTheOnThisArray(obj) {
  const updatedArray = [].concat(obj.onThisArray.map((x) => x * 3))
  console.log(updatedArray)
  return Object.assign(obj, obj, { onThisArray: updatedArray }) 
  // the first argument sets the target, so I'm mutating this object... if i gave it the { } then it'd create a temporary new one for the function iteration
  // keep in mind that mapTwoTimes only gets the temporary object
}

function addAnotherNumberByKey(ob, k) {
  console.log("this happens last")
  console.log(k) // it doesn't know what k is here... but it did for function that ran earlier -- the map times two
  return ("if this wasn't calling return... would be getting undefined here")
  // const appendMe = obj.key.concat(1233456)
  //return Object.assign(obj, obj, { key: appendMe }) 
}


const crazyArray = runSomeFunctions(
  addAnotherNumberByKey,
  mapTimesThreeForTheOnThisArray,
  mapTimesTwoForTheOnThisArray
) (crazyArrays, { hello: "from the argument"}, "random phrase") // only the most outer function has access to the extra arguments 

console.log(crazyArray)
