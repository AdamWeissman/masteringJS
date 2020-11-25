let theGuess = document.getElementById("theGuess")

randomGuess = (Math.floor(Math.random() * 10)) + 1
// theGuess.innerText = "click me to begin"

theGuess.innerText = "click me to begin"


//theGuess.onclick = guesser

function guesser() {
  //e.preventDefault()
  userGuess = prompt("Guess!")
  if (userGuess > randomGuess) {
    theGuess.innerText = "LOWER!"
    setTimeout(function() {
      guesser()
    }, 2000)
  } else if (userGuess < randomGuess) {
    theGuess.innerText = "HIGHER!"
    setTimeout(function() {
      guesser()
    }, 2000)
  } else if (userGuess == randomGuess) {
    theGuess.innerText = randomGuess + ", you got it!"
  }
};

//commented out to avoid auto run

// (function(){
//  guesser()  
// })() // the invocation can take an argument ... example below

// (function(name){
//   console.log("HI ", name)  
// })("Adam")
