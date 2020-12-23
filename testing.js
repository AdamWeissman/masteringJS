const snarf = 55
const snarg = 89

const fibNums = {
  55: "the number 55",
  89: "the number 89",
  5589: "would be 144 if added together"
}


console.log("first one", fibNums[5 + 5]) // doesn't work
console.log(fibNums[snarf])
console.log(fibNums[55])
console.log(fibNums["55"])
console.log(fibNums["5" + "5"])
console.log(fibNums[`${snarf}` + "89"]) // this works
console.log(fibNums[`${snarf}89`]) // this works
console.log(fibNums[`${snarf}${snarg}`]) //dynamically set keys