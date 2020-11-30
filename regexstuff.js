/*
  regexr.com



  .replace
  .match
  .test
  .exec
  .search

  .search vs .match (search gives the index, match gives item... double check)


*/



let myStr = "Hello World Javascript 123 this works Javascript"


let reg = /(\w+)\s(\w+)/

let newStr = myStr.replace("Hello","People")
newStr = myStr.replace(reg, "Bye People");
console.log(newStr);
console.log(myStr.match(/J/))
