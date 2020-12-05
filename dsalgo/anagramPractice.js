const re = /[^\w]/g

function anagrams(stringA, stringB) {
  const w1 = stringA.replace(re, "").toLowerCase()
  const w2 = stringB.replace(re, "").toLowerCase()
  console.log(w1, w2)
}
console.log("HELLO FROM ANAGRAMS")

anagrams("cat !!", "tA ? ?C")