const interesting =  new Function('str', 'return str("Adam")')

const z = interesting(hello)

function hello(x){
  console.log(`hi ${x}`)
}

