const giveAccessTo = (name) => 
  'Access Granted to ' + name //don't need brackets because it's an arrow function

function authenticate(verifyTime) {
  let array = []
  for (let i = 0; i < verifyTime; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function sing(person) {
  return 'lalalal my name is '+ person.name;
}


function letPerson(person, someFn) {
  if (person.level === 'admin') {
    //someFn(5000000) this code used with authenticate...
    // but could also be used with "sing function" or whatever
    return someFn(person)
  } else if (person.level === 'user') {
    //someFn(100000)
    return someFn(person) //this would call sing if sing is passed
  }
  
}

// console.log(letPerson({level: 'admin', name:'Sally'}, authenticate ))
console.log(letPerson({level: 'admin', name:'Sally'}, sing ))

// this is a decent portrait of higher order functions