let theGuess = document.getElementById("theGuess")

randomGuess = (Math.floor(Math.random() * 10)) + 1

theGuess.innerText = "?"

function guesser(r) {
  userGuess = prompt("Guess!")
  if (userGuess > randomGuess) {
    theGuess.innerText = "LOWER!"
  } else if (userGuess < randomGuess) {
    theGuess.innerText = "HIGHER!"
  } else {
    theGuess.innerText = r + " you got it!"
  }
}

guesser(randomGuess)