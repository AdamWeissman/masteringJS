// function addTo80(n) {
  
//   return n + 80;
// }

// let cache = {}

// function memoizedAddTo80(n) {
//   if (n in cache) {
//     return cache[n]
//   } else {
//     cache[n] = n + 80
//     return cache[n]
//   }
// }

function addTo80(n) {
  
  return n + 80;
}



function memoizedAddTo80() {
  let cache = {}
  return function(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log('long time')
    cache[n] = n + 80;
    return cache[n]
  }
  }
}

const memoized = memoizedAddTo80()
console.log('1', memoized(5))
console.log('2', memoized(5))