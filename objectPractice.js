const something = {}
something.oneThing = "you can assign on the fly"
something.twoThing = "yep, this too"

// also

const someThang = {
  oneThang:"like this",
  twoThang:"TWOOOOFER",
  threeThang: function() {console.log("HI", this.twoThang)},
  weirdness() {console.log("this weirdness works")}
}

// grab like this
console.log(someThang.oneThang)

// or like this
console.log(someThang["oneThang"]) // remember the quotes

someThang["oneThang"] = "reassigned to this value"
console.log(someThang["oneThang"])
someThang["threeThang"]() // this works
someThang.threeThang() // but this looks more "natural"
someThang.weirdness()

someThang["weirdness2"] = () => console.log("huh")
someThang.weirdness2()

someThang.weirdness3 = () => console.log("huh2")
someThang.weirdness3()

console.log(Object.keys(someThang), Object.values(someThang))

// setting up Object with "Class" type of vibe

function Warrior(armor, weapon, allegiance, enemy = "") {
  this.armor = armor;
  this.weapon = weapon;
  this.allegiance = allegiance;
  this.enemy = enemy
}

const fferfl = new Warrior("chainmail", "short sword", "elves")
console.log({fferfl})

const dwarg = new Warrior("plate", "spiked mace", "orcs")
console.log({dwarg})

dwarg.enemy = fferfl
console.log(dwarg.enemy.armor)