class URLSearchParams {
  constructor (query) {
    this._query = {}

    if (typeof query === 'string') {
      if (query.startsWith('?', 0)) {
        query = query.slice(1)
      }

      query.split('&').forEach(pair => {
        const params = pair.split('=')
        const key = params[0]
        const val = params[1]

        this._query[key] = val
      })
    } else {
      for (let [key, value] of Object.entries(query)) {
        this._query[key] = query[key]
      }
    }
  }

  get (key) {
    return this.has(key) ? this._query[key] : null
  }

  set (key, val) {
    this._query[key] = encodeURIComponent(val)
    return true
  }

  has (key) {
    return key in this._query
  }

  append (key, val) {
    const value = Array.isArray(val) ? val.join(',') : val
    if (key in this._query) {
      this._query[key].push(value)
    } else {
      this._query[key] = value
    }
    return this._query[key]
  }
}

const mysp1 = new URLSearchParams('a=aaa&b=bbb')
const mysp2 = new URLSearchParams({ c: 'ccc', d: 'ddd' })

console.log(mysp1) // URLSearchParams { _query: { a: 'aaa', b: 'bbb' } }
console.log(mysp1.get('a')) // aaa
console.log(mysp1.set('c', 'ccc')) // true
console.log(mysp1.has('d')) // false
console.log(mysp1.append('e', 'eee')) // eee
console.log(mysp1) // { _query: { a: 'aaa', b: 'bbb', c: 'ccc', e: 'eee' } }

console.log(mysp2) // URLSearchParams { _query: { c: 'ccc', d: 'ddd' } }
console.log(mysp2.get('c')) // ccc
console.log(mysp2.set('d', 'ddd2')) // true
console.log(mysp2.has('d')) // true
console.log(mysp2.append('f', 'fff')) // fff
console.log(mysp2) // URLSearchParams { _query: { c: 'ccc', d: 'ddd2', f: 'fff' } }
