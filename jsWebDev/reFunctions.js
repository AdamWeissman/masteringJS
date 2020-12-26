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

// const add = function (x, y) {
//   return x + y
// }

function sayHello() {
  console.log("hi")
}

function callTwice(f, ...args) {
  console.log(f(args[0], args[1]));
  console.log(f(args[0], args[1]));
}

callTwice(add, 7, 3)


// FACTORY FUNCTION ... to return another function...

function makeBetweenFunc(min, max) {
  return function (num) {
    return (num >= min && num <= max) ? true : false 
  }
}

const seniorCitizen = makeBetweenFunc(65, 120)
console.log("40", seniorCitizen(40))
console.log("70", seniorCitizen(70))

const nums = [1,2,3,5,8,13]



nums.forEach(function (element) {
  console.log(element)
})

const movies = [
  {
    title: "Hollywood 1",
    rating: 1
  },
  {
    title: "Hollywood 2",
    rating: 9
  },
  {
    title: "Hollywood 3",
    rating: 5
  }
] 

const titles = movies.map(function(movie) {
  return movie.title
});

console.log(titles)