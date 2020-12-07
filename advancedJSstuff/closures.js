//Closures make Encapsulation Possible...

function crazyOperation(index) {
  const bigArray = new Array(7000).fill('X')
  console.log("outside closure")
  return function(index) {
    console.log("created within closure")
    return bigArray[index]
  }
}

console.log(crazyOperation(50))
const x = crazyOperation(100)

x(50)
x(25)
x(55)