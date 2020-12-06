const bowser = {name: "Bowser", fighterType: "barbarian"}
const lancelot = {name: "Lancelot", fighterType: "knight"}
const merlin = {name: "Merlin", fighterType: "wizard"}

function melee(p) {
  return p.name + " the " + p.fighterType + " says YAAARRRGH"
}

function ranged(p) {
  return p.name + " the " + p.fighterType + " says THWWWIPPP"
}

function magical(p) {
  return p.name + " the " + p.fighterType + " says SPARKLY SPARKLE SPARK"
}

const themAttacks = [melee, ranged, magical]

function battle(character, attackTypes) {
  if (character.fighterType == "knight") {
    return attackTypes[0](character)
  } else if (character.fighterType == "barbarian") {
    return [attackTypes[1](character), attackTypes[0](character)].join(' ')
  } else if (character.fighterType == "wizard") {
    return attackTypes[2](character)
  }
}

console.log(battle(merlin, [melee, ranged, magical]))
console.log(battle(bowser, themAttacks))
console.log(battle(lancelot, themAttacks))