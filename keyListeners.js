// key down, key up etc...

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
}


document.addEventListener("keydown", pressKeyOn)
document.addEventListener("keyup", pressKeyOff)

function pressKeyOn(event){
  //console.dir(event.key) show the key that's being pressed
  console.log(keys[event.key] = true)
}

function pressKeyOff(event){
  //console.dir(event.key)
  console.log(keys[event.key] = false)
}