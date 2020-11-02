class Property {
  constructor(size, price, location) {
    this.size = size
    this.price = price
    this.location = location
  }
}

const vasakaNines = new Property(60, 1400000000, 'BSD City')
const vasakaSoltera = new Property(65, 1800000000, 'Pejaten')

console.log(vasakaNines)
console.log(vasakaSoltera)
