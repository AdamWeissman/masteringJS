let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}


console.log(totalEggs);
collectEggs()
console.log(totalEggs);

let bird = "Scarlet Macaw"
function theBird() {
  let bird = "Blue Heron" 
  console.log(bird)
}

theBird()
console.log(bird)

// COMPARE BELOW ... functionally equivalent... but keep in mind hoisting.

function add(x, y) {
  return x + y
}

const add = function (x, y) {
  return x + y
}