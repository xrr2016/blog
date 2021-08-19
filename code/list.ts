class List {
  pos: number // 列表当前位置
  data: Array<any> // 列表的数据存储
  listSize: number // 列表的元素个数

  constructor() {
    this.pos = 0
    this.listSize = 0
    this.data = []
  }

  // 返回列表的长度
  get length() {
    return this.listSize
  }

  // 返回列表的当前位置
  get currentPos() {
    return this.pos
  }

  // 清空列表中的所有元素
  clear() {
    delete this.data
    this.data.length = this.listSize = this.pos = 0
  }

  // 返回列表的字符串形式
  toString() {
    return this.data.toString()
  }

  // 返回当前位置的元素
  getElement() {
    return this.data[this.pos]
  }

  // 在现有元素后插入新元素
  insert(element: any, after: any) {
    const index = this.findIndex(after)

    if (index > -1) {
      this.data.splice(index + 1, 0, element)
      this.listSize += 1
      return true
    }

    return false
  }

  // 在列表的末尾添加新元素
  append(element: any) {
    this.data.push(element)
    this.listSize += 1
  }

  // 从列表中删除元素
  remove(element: any) {
    const index = this.findIndex(element)

    if (index > -1) {
      this.data.splice(index, 1)
      this.listSize -= 1
      return true
    }
    return false
  }

  // 判断元素是否在列表中
  contains(element: any) {
    return this.data.includes(element)
  }

  // 将列表的当前位置移动到第一个元素
  front() {
    this.pos = 0
  }

  // 将列表的当前位置移动到最后一个元素
  end() {
    this.pos = this.listSize - 1
  }

  // 将当前位置向前移一位
  prev() {
    if (this.pos > 0) {
      this.pos -= 1
    }
  }

  // 将当前位置向后移一位
  next() {
    if (this.pos < this.listSize) {
      this.pos += 1
    }
  }

  // 判断是否有后一个元素
  hasNext() {
    return this.pos < this.listSize
  }

  // 判断是否有前一个元素
  hasPrev() {
    return this.pos > 0
  }

  // 将列表的当前位置移动到指定位置
  moveTo(position: number) {
    if (position > 0 && position < this.listSize) {
      this.pos = position
    }
  }

  // 查找元素位置
  private findIndex(element: any) {
    return this.data.findIndex(ele => element === ele)
  }
}

const list = new List()

list.append('aaa')
list.append('bbb')
list.append('ccc')
list.append('ddd')
list.append('eee')

console.log('list :', list)
