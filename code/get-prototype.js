function getPrototype(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj
  }

  return getPrototype(Object.getPrototypeOf(obj), key)
}


const obj = { a: 'a' }
const o1 = Object.create(obj)
o1.b = 'b'

console.log(o1.a) // a
console.log(o1.b) // b

console.log(o1.hasOwnProperty('a')) // false
console.log(o1.hasOwnProperty('b')) // true

console.log(getPrototype(o1, 'a')) // { a: 'a' }
console.log(getPrototype(o1, 'b')) // { b: 'b' }
