let theGuess = document.getElementById("theGuess")

randomGuess = (Math.floor(Math.random() * 10)) + 1
theGuess.innerText = "?"

theGuess.onclick = guesser

function guesser(e) {
  e.preventDefault()
  userGuess = prompt("Guess!")
  if (userGuess > randomGuess) {
    theGuess.innerText = "LOWER!"
  } else if (userGuess < randomGuess) {
    theGuess.innerText = "HIGHER!"
  } else if (userGuess == randomGuess) {
    theGuess.innerText = randomGuess + ", you got it!"
  }
}
