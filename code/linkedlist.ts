class LinkedListNode {
  element: any
  prev: LinkedListNode
  next: LinkedListNode

  constructor(element: any) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class LinkedList {
  // 头节点
  head: LinkedListNode = new LinkedListNode('head')

  // 查找
  find(element: any) {
    let currentNode = this.head

    while (currentNode.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 找到最后的节点
  findLast() {
    let currentNode = this.head

    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // 插入
  insert(element: any, item: any) {
    let newNode = new LinkedListNode(element)
    let currentNode = this.find(item)

    newNode.prev = currentNode
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  // 移除
  remove(element: any) {
    let currentNode = this.find(element)

    if (currentNode.next !== null) {
      currentNode.prev.next = currentNode.next
      currentNode.next.prev = currentNode.prev
      currentNode.next = null
      currentNode.prev = null
    }
  }

  // 显示
  display() {
    let currentNode = this.head

    while (currentNode.next !== null && currentNode.next.element !== 'head') {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }

  // 倒叙显示
  displayReverse() {
    let currentNode = this.findLast()

    while (currentNode.prev !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.prev
    }
  }
}

const foods = new LinkedList()

foods.insert('eggs', 'head')
foods.insert('apple', 'eggs')
foods.insert('bread', 'apple')
foods.insert('chese', 'bread')
foods.insert('rice', 'chese')
foods.display()
console.log('------------')
foods.remove('bread')
foods.display()
console.log('------------')
foods.displayReverse()
