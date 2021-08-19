class Stack {
  data: Array<any> = []
  top: number = 0

  get length() {
    return this.top
  }

  // 向栈中压入一个新元素
  push(element: any) {
    this.data.push(element)
    this.top += 1
  }

  // 返回栈顶元素, 同时将 top 值减 1
  pop() {
    this.top -= 1
    return this.data.pop()
  }

  // 返回栈顶元素
  peek() {
    if (!this.data.length) {
      return false
    }

    return this.data[this.top - 1]
  }

  // 清空栈
  clear() {
    this.top = 0
  }
}

function isPalindrome(word: string) {
  let rword = ''
  const stack = new Stack()

  word.split('').forEach(w => stack.push(w))

  while (stack.length > 0) {
     rword += stack.pop()
  }

  if(word === rword) {
    return true
  }

  return false
}


console.log('hello', isPalindrome('hello'));

console.log('bob', isPalindrome('bob'));

console.log('racecar', isPalindrome('racecar'));
