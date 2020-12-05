const re = /[^\w]/g

function anagrams(stringA, stringB) {
  const w1 = stringA.replace(re, "").toLowerCase()
  const w2 = stringB.replace(re, "").toLowerCase()
  const x = w1.split('').sort().join('')
  const y = w2.split('').sort().join('')
  return (x == y)
}
console.log("HELLO FROM ANAGRAMS")

console.log(anagrams("cat !!", "tA ? ?C"))