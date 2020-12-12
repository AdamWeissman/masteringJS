// Compose 

const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num) 
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive) // compose isn't built in with JS, but can check out ramda library

console.log(multiplyBy3AndAbsolute(-50))

// Pipe

// const pipe = (f, g) => (data) => g(f(data)) // same line as compose except order is reversed