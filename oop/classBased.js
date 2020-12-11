//ES6 CLASS

// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() { // behind the scenes this function is basically inherited by whatever is made from the constructor
//     return 'attack with ' + this.weapon
//   }
// }

// const peter = new Elf('Peter', 'stones')
// console.log(peter.attack());
// console.log(peter.name)


// CAN USE Object.create() to accomplish the same as above


/*
FOUR WAYS TO USE THIS
  ...new binding this...

  function Person(name, age) {
      this.name = name;
      this.age = age;
    }

  const person1 = new Person('Xavier', 55)
  person1 is "this"

  ...implicit binding this...
  const person = {
    name: 'Karen',
    age: 40,
    hi() {
      console.log('hi' + this.name)
    }
  }

  this refers to const person above

  ...explicit binding...

  const person3 = {
    name: 'Karen',
    age: 40, 
    hi: function() {
      console.log('hi' + this.setTimeout)
    }.bind(window)
  }

  person3.hi()  THIS refers to the window


  ...arrow function...

  const person4 = {
    name: 'Karen',
    age: 40, 
    hi: function() {
      var inner = () => {
        console.log('hi ' + this.name)
      }
      return inner()
    }
  }

  person4.hi() THIS refers to the lexical scope on line 64 with console.log... 
  if not an arrow function it would refer to the larger scope
*/

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return 'attack with ' + this.weapon;
  }
}


class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon) // this refers to the super class, and allows type to be added to the super class
    console.log("first this", this)
    this.type = type
    console.log("new this", this)
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return 'strongest fort in the world made';
  }
}




const dolby = new Elf('Dolby', 'ninja stars', 'house elf')

const shrek = new Ogre('Shrek', 'club', 'green')

console.log(dolby)
console.log(shrek)
console.log(shrek.makeFort())
console.log(Ogre.prototype.isPrototypeOf(shrek))
console.log(dolby instanceof Character)
console.log(dolby instanceof Elf)