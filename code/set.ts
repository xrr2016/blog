class MySet {
  data = <any>[]

  get size() {
    return this.data.length
  }

  add(element: any) {
    if (this.data.indexOf(element) > -1) {
      return false
    }

    this.data.push(element)
  }

  remove(element: any) {
    const index = this.data.indexOf(element)

    if (index > -1) {
      this.data.splice(index, 1)
      return true
    }

    return false
  }

  contains(element: any) {
    if (this.data.indexOf(element) > -1) {
      return true
    }
    return false
  }

  // 并集
  uinon(set: MySet) {
    const newSet = new MySet()

    this.data.forEach((e: any) => newSet.add(e))

    for (let index = 0; index < set.data.length; index++) {
      const ele = set.data[index]
      if (!newSet.contains(ele)) {
        newSet.add(ele)
      }
    }

    return newSet
  }

  // 交集
  intersect(set: MySet) {
    const newSet = new MySet()

    this.data.forEach((ele: any) => {
      if (set.contains(ele)) {
        newSet.add(ele)
      }
    })
    return newSet
  }

  // 判断是否是补集
  subset(set: MySet) {
    if (this.size > set.size) {
      return false
    } else {
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index]

        if (!set.contains(element)) {
          return false
        }
      }

      return true
    }
  }

  // 返回集合中不同的成员
  difference(set: MySet) {
    const newSet = new MySet()

    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index]
      if (!set.contains(element)) {
        newSet.add(element)
      }
    }

    return newSet
  }

  show() {
    return this.data.forEach((e: any) => console.log(e))
  }
}

const setOne = new MySet()

setOne.add('a')
setOne.add('b')
setOne.add('c')

const setTwo = new MySet()

setTwo.add('c')
setTwo.add('d')
setTwo.add('e')
setTwo.add('f')

const setThree = setOne.uinon(setTwo)
console.log('合集')
setThree.show()

const setFour = setOne.intersect(setTwo)
console.log('交集')
setFour.show()

const isSubset = setOne.subset(setTwo)
console.log('是否是补集', isSubset)

const setSix = setOne.difference(setTwo)
console.log('查看集合中不同的成员')
setSix.show()
