/*


.children shows all the children elements within a given element
.children.length (can iterate through as an array)

cannot automatically iterate through .children, but you can with .childNodes

for example

someElement.childNodes.forEach(function(ele, index) {
  console.log(ele)
})

someElement.parentElement
someElement.parentNode

someElement.nextElementSibling returns same level
someElement.nextSibling
someElement.previousSibling


ELEMENT CREATION
const div = document.createElement("div")
div.style.backgroundColor = "blue";
div.id = "newOne"
div.style.padding = "35px";
div.style.fondSize = "45px";
div.textContent = "hello"

... or like this....
const textiInside = document.createTextNode("hello world");
div.appendChild(textInside);
document.body.appendChild(div)

const h1 = document.querySelector("h1");
document.body.insertBefore(div, h1)


*/

