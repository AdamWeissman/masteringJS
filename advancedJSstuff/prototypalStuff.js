const arr = []

console.log(arr.__proto__.__proto__) // move up the prototype change

let dragon = {
    name: 'Tanya',
    fire: true,
    fight(){
      return 5
    },
    sing() {
      return `I am ${this.name}, the breather of fire`
    }
}

let lizard = {
  name: 'Kiki',
  fight(){
    return 1
  }
}

const singLizard = dragon.sing.bind(lizard)

console.log(singLizard())

// never use something.__proto__ = someThingElse
// how to create your own prototypal inheritance

let human = {
  mortal: true
}

let socrates = Object.create(human)
socrates.age = 45
console.log(human.isPrototypeOf(socrates))
