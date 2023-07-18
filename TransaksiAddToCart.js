// Transaksi add to cart dengan quantity yang di tentukan
class Product {
    productName = ""
    price = 0
    quantity = 0
  
    constructor(productName, price, quantity) {
      this.price = price
      this.quantity = quantity
      this.productName = productName
    }
  
    // calculateTotalPrice = () => {
    //   return this.quantity * this.price
    // }
  }
  
  class Transaction {
    cart = [] 
    total = 0
  
    addToCart = (product) => {
      this.cart.push(product)
      this.total += product.price * product.quantity
    }
  
    showTotal = () => {
      console.log(`Total: Rp. ${this.total.toLocaleString()}`)
    }
  
    checkout = () => {
      // 1. Apel Rp. 3,000 x 5 = Rp. 15,000
      // 2. Apel Rp. 3,000 x 5 = Rp. 15,000
      // 3. Apel Rp. 3,000 x 5 = Rp. 15,000
      // Total: Rp. 45,000
      for (let i = 0; i < this.cart.length; i++) {
        let product = this.cart[i]
        console.log(
          `${i + 1}. ${product.productName
          } Rp. ${product.price.toLocaleString()} x ${product.quantity} = Rp. ${(
            product.price * product.quantity
          ).toLocaleString()}`
        )
      }
      this.showTotal()
    }
  }
  
  const transaction = new Transaction()
  
  const arrProducts = [
    new Product("Leci", 5000, 3),
    new Product("Jeruk", 2000, 1),
    new Product("Apel", 7000, 5),
    new Product("Mangga", 10000, 2),
    new Product("Anggur", 500000, 3),
  ]
  
  transaction.addToCart(arrProducts[0]) 
  transaction.addToCart(arrProducts[3])
  
  transaction.checkout()
  // 1. Apel Rp. 3,000 x 5 = Rp. 15,000
  // 2. Apel Rp. 3,000 x 5 = Rp. 15,000
  // 3. Apel Rp. 3,000 x 5 = Rp. 15,000
  // Total: Rp. 45,000
  // transaction.showTotal()
  

// transaksi addToCart Tanpa Quantity yg ditentukan
// class Product {
//   productName = ""
//   price = 0
//   quantity = 0

//   constructor(productName, price) {
//     this.price = price
//     this.productName = productName
//     this.quantity = 0
//   }

//   calculateTotalPrice = () => {
//     return this.quantity * this.price
//   }

//   setQuantity = (newQuantity) => {
//     if (newQuantity < 1) {
//       throw new Error("Quantity harus lebih dari 0")
//     }

//     this.quantity = newQuantity
//   }
// }

// class Transaction {
//   cart = []
//   total = 0

//   addToCart = (product, newQuantity) => {
//     product.setQuantity(newQuantity)

//     this.cart.push(product)
//     this.total += product.price * product.quantity
//   }

//   showTotal = () => {
//     console.log(`Total: Rp. ${this.total.toLocaleString()}`)
//   }

//   checkout = () => {
//     for (let i = 0; i < this.cart.length; i++) {
//       let product = this.cart[i]
//       console.log(
//         `${i + 1}. ${product.productName
//         } Rp. ${product.price.toLocaleString()} x ${product.quantity} = Rp. ${(
//           product.price * product.quantity
//         ).toLocaleString()}`
//       )
//     }
//     this.showTotal()
//     this.cart = []
//     this.total = 0
//   }
// }

// const transaction = new Transaction()

// const arrProducts = [
//   new Product("Leci", 5000),
//   new Product("Jeruk", 2000),
//   new Product("Apel", 7000),
//   new Product("Mangga", 10000),
//   new Product("Anggur", 500000),
// ]

// transaction.addToCart(arrProducts[1], 2)
// transaction.addToCart(arrProducts[4], 4)

// transaction.checkout()
