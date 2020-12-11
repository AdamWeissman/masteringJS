const elf = {
  name: "Orwell",
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon
  }
}

//factory functions

const elfFunctions = { //extracted from code below
  attack() {
    return 'attack with ' + this.weapon // this so it knows where to get the weapon
  } 
}


function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions)
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf
  
  // INSTEAD OF BELOW, USE ABOVE
  //return {
    //name: name, //es6 can just use name
    //weapon: weapon, //es6 can just use weapon
    // attack() {
    //   return 'attack with ' + elf.weapon
    // } 
  //}
}

const peter = createElf('Peter', 'stones')
//peter.attack = elfFunctions.attack()
console.log(peter.attack())

// recoding above with CONSTRUCTOR FUNCTIONS...
// no returns, just using constructors

function Orc(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}


const Orc1 = new Function('name', 'weapon',
  `this.name = name;
  this.weapon = weapon;
  `
  )

const sarlag = new Orc1('Sarlag', 'fireworks')

console.log(sarlag)

Orc.prototype.attack = function() { // remember this wont work if an arrow function... arrow functions are lexically scoped

  return 'attack with ' + this.weapon
}

const potar = new Orc('Potar', 'fire')
console.log(potar.name)
console.log(potar.attack())

// REMEMBER ... ARROW FUNCTION IS LEXICALLY SCOPED
//          WHEREAS function () is dynamically scoped.
