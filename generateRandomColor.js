
const changeThis = document.getElementById("randomColorThing")
const colorButton = document.getElementById("colorChanger")

colorButton.addEventListener("click", function(){
  changeThis.style.backgroundColor= 'rgb(' + [random(255),random(255),random(255)].join(',') + ')'
})

//BEWARE OF THE SYNTAX ABOVE

function random(num){
  return Math.floor(Math.random() * (num + 1))
}