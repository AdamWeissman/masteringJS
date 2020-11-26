// alert("YO")
// userName = prompt("What's your name?")
// alert((userName == "Adam") ? `Nice to meet you ${userName}` : `Never heard of you ${userName}`)


// let switchTest = prompt("What are three things you want to master in the next month?")

// switch(switchTest) {
//   case "JavaScript for Coding Interviews":
//   console.log("JavaScript for Coding Interviews");
//   case "JavaScript for the DOM":
//   console.log("JavaScript for the DOM", "also if no break on the above case \n then it runs this... \n if no break on this, it'll run cases until it finds one")
//   break;
//   case "JaveScript for Node.js and Express":
//   console.log("JaveScript for Node.js and Express")
//   break;
// }

function message() {
  alert("surprise")
}

function message2() {
  alert("surprise2")
}

const thangs = document.querySelectorAll("thang")
console.log(thangs)

const ittyButtons = document.querySelectorAll(".iterableButton")
const c = document.querySelector(".changling")  

let c5 = function() {
  return c.innerText = "Remember blaahh"
} // this function will work because it appears before ittyButtons[4] 


ittyButtons[0].onclick = c1
ittyButtons[1].onclick = c2
ittyButtons[2].onclick = c3
ittyButtons[3].onclick = c4
ittyButtons[4].onclick = c5


function c1() {
  c.innerText = "c1"
}

function c2() {
  c.innerText = "c2"
}

function c3() {
  c.innerText = "c3"
}

function c4() {
  c.innerText = "c4"
}

// function c5() {
//   c.innerText = "REMEMBER! Function Declarations are hoisted \n while Function Expressions are not"
// }


//  function c5 above is equivalent to below... but, below won't work because it isn't hoisted above the the part where it's called... 
// let c5 = function() {
//   return c.innerText = "Remember blaahh"
// }





/*

  useful js to be aware of: 
  prompt
  typeOf

*/