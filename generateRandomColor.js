
const changeThis = document.getElementById("randomColorThing")
const colorButton = document.getElementById("colorChanger")
const anotherButton = document.getElementById("colorChanger")

const spans = document.querySelectorAll("span")

spans.forEach(function(el, index){
  el.style.padding ="35px";
  el.style.border = "1px solid black";
  el.style.display = "block";
  
  el.addEventListener("click", function(theEvent){
    theEvent.target.style.backgroundColor = makeRandomColor()
  })
  
  // el.addEventListener("click", function(){
  //   el.style.backgroundColor= 'rgb(' + [random(255),random(255),random(255)].join(',') + ')'
  // })
})

function makeRandomColor(){
  return 'rgb(' + [random(255),random(255),random(255)].join(',') + ')'
}


colorButton.addEventListener("click", function(){
  changeThis.style.backgroundColor= 'rgb(' + [random(255),random(255),random(255)].join(',') + ')'
})

//BEWARE OF THE SYNTAX ABOVE FOR SETTING BACKGROUND COLOR

function random(num){
  return Math.floor(Math.random() * (num + 1))
}

// anotherButton,addEventListener("click", function(someEvent){
//   console.dir(someEvent);
//   console.log(someEvent.target);
//   console.log(this)
// })