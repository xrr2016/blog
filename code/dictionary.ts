class Dictionary {
  data: any[] = []

  // 添加元素
  add(key: any, value: any) {
    this.data[key] = value
  }

  // 查找元素
  find(key: any) {
    return this.data[key]
  }

  // 删除元素
  remove(key: any) {
    delete this.data[key]
  }

  // 显示元素
  show() {
    Object.entries(this.data)
      .sort()
      .forEach(item => {
        console.log('key:', item[0], ' value:', item[1])
      })
  }

  // 元素个数
  count() {
    let n = 0
    Object.keys(this.data).forEach(_ => {
      n += 1
    })
    return n
  }

  // 清空元素
  clear() {
    Object.keys(this.data).forEach((key: any) => {
      delete this.data[key]
    })
  }
}

const dictionary = new Dictionary()

dictionary.add('c', 'c')
dictionary.add('a', 'a')
dictionary.add('d', 'd')
dictionary.add('e', 'e')
dictionary.add('b', 'b')

dictionary.show()

console.log('count: ', dictionary.count())

dictionary.clear()

console.log('clear: ', dictionary.count())
