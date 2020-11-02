class Property {
  constructor(name, size, price, location) {
    this.name = name
    this.size = size
    this.price = price
    this.location = location
  }
  showSizeInSQM = () => {
    return this.size + ' m2'
  }
  showPriceInIDR = () => {
    return 'IDR ' + this.price
  }
  showSummary = () => {
    return `${
      this.name
    } is ${this.showSizeInSQM()} in size and its price is ${this.showPriceInIDR()}. It is located in ${
      this.location
    }.`
  }
}

const vasakaNines = new Property('Vasaka Nines', 70, 1400000000, 'BSD City')
const vasakaSoltera = new Property('Vasaka Soltera', 65, 1800000000, 'Pejaten')

console.log(vasakaNines.showSummary())
console.log(vasakaSoltera.showSummary())
