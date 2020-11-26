// BASIC DOM STUFF
// console.dir(document) to get a listing of what's on a page...

document.querySelector("h1").style.backgroundColor = "red"
document.getElementById('thang').style.backgroundColor = "blue"
document.querySelector('#thang').style.backgroundColor = "green"

// using # for id
// using . for class
// no prefix for general selection

// document.getElementsByClassName('')
// document.getElementsByTagName('')
// document.querySelectorAll('')

// be aware of .textContent

// can do .forEach(function(element, index))


// let eleList = document.getElementsByClassName('first');
// eleList = document.getElementsByTagName('span');
// eleList = document.querySelectorAll('.first');
// for (let i = 0; i < eleList.length; i++) {
//     let el = eleList[i];
//     console.log(el);
//     eleList[i].textContent = (i + 1) + ' updated';
// }
// eleList.forEach(function (el, index) {
//         console.log(index);
//         el.textContent = `${index} : updated`;
//         el.style.backgroundColor = 'red';
//     }) /// only for nodelist
// console.log(eleList);




// .setAttribute('class', 'someClass')
// .remove() takessomething away

/*
const links = document.querySelectorAll('a')
links.forEach(function(el){
  console.log(el.getAttribute('href'));
  el.setAttribute('href', "www.huh.com")
})





USEFUL CLASSLIST METHODS...
.classList.add('addAClassName')
.classList.toggle('adds if it isn't there, takes it a way if it is')
.classList.remove('put the name of the class here')
.classList.replace('current class', 'new class')



*/

