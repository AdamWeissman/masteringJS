const user = {
  name: "Adam",
  active: true,
  cart: [],
  purchases: []
}

// function purchaseItem(user, item) {
//   return Object.assign({}, user, {purchases: item})
// }

// function itemToCart(user, item) {

// }

// function applyTaxToItems(user, item) {

// }

// function buyItem(user, item) {

// }

// function emptyCart() {

// }

let cartHistory = []

const compose = (f, g) => (...args) => f(g(...args));

purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart,
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns) {
  cartHistory.push(user)
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  cartHistory.push(user) // add this to every function
  const updateCart = user.cart.concat([item])
  return Object.assign( {}, user, {cart: updateCart })
}

function applyTaxToItems(user) {
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart})
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart})
}

function emptyCart(user) {
  return Object.assign({}, user, { cart: updateCart })
}


function refundItem() {

}