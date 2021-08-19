class HashTable {
  table = <any>[]

  constructor() {
    this.table = Array.from({
      length: 137
    })
  }

  // 将字符串的 ASCLL 码相加对数组长度求余
  hash(data: string) {
    let total = 0
    for (let index = 0; index < data.length; index++) {
      total += data.charCodeAt(index)
    }
    return total % this.table.length
  }

  betterHash(data: string) {
    const H = 37
    let total = 0

    for (let index = 0; index < data.length; index++) {
      total += H * total + data.charCodeAt(index)
    }

    total = total % this.table.length

    if (total < 0) {
      total += this.table.length - 1
    }

    return parseInt(total.toString())
  }

  put(key: string, data: any) {
    const pos = this.betterHash(key)
    this.table[pos] = data
  }

  get(key: string) {
    return this.table[this.betterHash(key)]
  }

  show() {
    for (let index = 0; index < this.table.length; index++) {
      const item = this.table[index]
      if (item) {
        console.log(`${index}: ${item}`)
      }
    }
  }
}

const hashTable = new HashTable()

hashTable.put('David', 'David')
hashTable.put('Jennifer', 'Jennifer')
hashTable.put('Donnie', 'Donnie')
hashTable.put('Raymond', 'Raymond')
hashTable.put('Cynthia', 'Cynthia')
hashTable.put('Mike', 'Mike')
hashTable.put('Clayton', 'Clayton')
hashTable.put('Danny', 'Danny')
hashTable.put('Jonathan', 'Jonathan')

hashTable.show()

console.log('Jonathan: ', hashTable.get('Jonathan'))
