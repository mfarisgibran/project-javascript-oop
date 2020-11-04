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

class House extends Property {
  constructor(name, size, price, location, story) {
    super(name, size, price, location)
    this.story = story
  }
  showNumberOfStories = () => {
    return this.story + ' stories'
  }
  showSummary = () => {
    return `${
      this.name
    } is ${this.showSizeInSQM()} in size and its price is ${this.showPriceInIDR()}. It is located in ${
      this.location
    } with ${this.showNumberOfStories()}.`
  }
}

const vasakaNines = new Property('Vasaka Nines', 70, 1400000000, 'BSD City')
const vasakaSoltera = new Property('Vasaka Soltera', 65, 1800000000, 'Pejaten')
const avastaBekasi = new House('Avasta Bekasi', 200, 1500000000, 'Bekasi', 2)

console.log(vasakaNines.showSummary())
console.log(vasakaSoltera.showSummary())
console.log(avastaBekasi.showSummary())
