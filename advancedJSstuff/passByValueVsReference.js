let obj = {
  a: 'a',
  b: 'b',
  cShallow: 'c Shallow',
  dDeep: {
    deep: "try and copy me"
  },
}

let clone = Object.assign({}, obj);
let cloneShallow = {...obj}
let cloneDeep = JSON.parse(JSON.stringify(obj))


obj.c = "c is changed"
obj.d = "d is changed"
// console.log(obj.c)
// console.log(obj.d)
// console.log("ORIGINAL OBJECT \n", obj)
// console.log("___")
// console.log("CLONE OBJECT \n", clone)
// console.log("___")
// console.log("CLONE SHALLOW OBJECT \n", cloneShallow)
// console.log("___")
// console.log("CLONE DEEP OBJECT \n", cloneDeep)
// console.log("_________")
// console.log("_________")
obj.dDeep.deep = "d is changed for real"
//cloneDeep = JSON.parse(JSON.stringify(obj))
console.log(obj.dDeep.deep)
console.log("ORIGINAL OBJECT \n", obj)
console.log("___")
console.log("CLONE OBJECT \n", clone)
console.log("___")
console.log("CLONE SHALLOW OBJECT \n", cloneShallow)
console.log("___")
console.log("CLONE DEEP OBJECT \n", cloneDeep)