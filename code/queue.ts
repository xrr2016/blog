class Queue {
  data: Array<MyElement> = []

  // 入队
  enqueue(element: MyElement) {
    this.data.push(element)
  }

  // 出队
  dequeue() {
    const codes = this.data.map(ele => ele.code)
    const minCode = Math.min.apply(null, codes)
    const index = this.data.findIndex(ele => ele.code === minCode)

    return this.data.splice(index, 1)
  }

  // 返回第一个元素
  front() {
    return this.data[0]
  }

  // 返回最后一个元素
  back() {
    return this.data[this.data.length - 1]
  }

  // 显示队列中所有元素
  toString() {
    return this.data.map(ele => `${ele}`).toString()
  }

  // 判断队列是否为空
  empty() {
    if (this.data.length) {
      return false
    }
    return true
  }
}

interface MyElement {
  data: any
  code: number // code 表示优先级，数值越小优先级越高，0 为最高
}

const queue = new Queue()

queue.enqueue({ data: 'a', code: 5 })
queue.enqueue({ data: 'b', code: 4 })
queue.enqueue({ data: 'c', code: 3 })
queue.enqueue({ data: 'd', code: 2 })
queue.enqueue({ data: 'e', code: 1 })

console.log('queue: ', queue)

queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log('queue: ', queue)
