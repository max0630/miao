var max0630 = {
  chunk: function (array, size = 1) {
    var newAry = []
    var k = 0
    while (k < array.length) {
      var partAry = []
      while (k < size) {
        if (array.length == 0) {
          break
        }
        partAry.push(array[0])
        array.shift()
        k++
      }
      newAry.push(partAry)
      k = 0
    }
    return newAry
  },

  compact: function (array) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] == 0 || array[i] == false || array[i] == '' || array[i] == null || array[i] == undefined || array[i] !== array[i]) {

      } else newAry.push(array[i])
    }
    return newAry
  },


  drop: function (array, n = 1) {
    var count = 0
    while (count != n) {
      if (array == null) {
        return array
      }
      array.shift()
      count++
    }
    return array
  },

  dropRight: function (array, n = 1) {
    var count = 0
    while (count != n) {
      if (array == null) {
        return array
      }
      array.pop()
      count++
    }
    return array
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  flatten: function (array) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var t = array[i]
        for (var j = 0; j < t.length; j++) {
          newAry.push(t[j])
        }
      } else newAry.push(array[i])
    }
    return newAry
  },


  flattenDeep: function flattenDeep(array) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        newAry = newAry.concat(flattenDeep(array[i]))
      } else {
        newAry.push(array[i])
      }
    }
    return newAry
  },

  fromPairs: function (pairs) {
    var map = {}
    for (var i = 0; i < pairs.length; i++) {
      var t = pairs[i]
      var str = t[0]
      map[str] = t[1]
    }
    return map
  },

  head: function (array) {
    if (array == null) {
      return undefined
    } else return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },

  initial: function (array) {
    var newAry = []
    for (var i = 0; i < array.length - 1; i++) {
      newAry.push(array[i])
    }
    return newAry
  },


  intersection: function (...arrays) {
    var newAry = []
    var map = {}
    for (var j = 0; j < arrays.length; j++) {
      var t = arrays[j]
      for (var i = 0; i < t.length; i++) {
        if (map[t[i]]) {
          map[t[i]]++
        } else {
          map[t[i]] = 1
        }
      }
    }
    for (var k in map) {
      if (map[k] == arrays.length) {
        newAry.push(Number(k))
      }
    }
    return newAry
  },

  join: function (array, seperator = ',') {
    var newStr = ''
    for (var i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        newStr = newStr + array[i]
      } else {
        newStr = newStr + array[i] + seperator
      }
    }
    return newStr
  },

  last: function (array) {
    return array[array.length - 1]
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },

  nth: function (array, n = 0) {
    if (n < 0) {
      n = array.length + n
    }
    return array[n]
  },

  pull: function (array, ...values) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (values.includes(array[i])) {

      } else {
        newAry.push(array[i])
      }
    }
    return newAry
  },

  pullAll: function (array, values) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (values.includes(array[i])) {

      } else {
        newAry.push(array[i])
      }
    }
    return newAry
  },

  reverse: function (array) {
    var newAry = []
    for (var i = array.length - 1; i >= 0; i--) {
      newAry.push(array[i])
    }
    return newAry
  },

  sortedIndex: function (array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value <= array[i]) {
        return i
      }
    }
  },

  sortedIndexOf: function (array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
  },

  sortedLastIndex: function (array, value) {
    for (var i = 0; i < array.length; i++) {
      if (value < array[i]) {
        return i
      }
    }
  },

  sortedLastIndexOf: function (array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
  },

  sortedLastIndex: function (array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > value) {
        return i
      }
    }
  },

  sortedUniq: function (array) {
    var map = {}
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      map[array[i]] = 1
    }
    for (var k in map) {
      newAry.push(Number(k))
    }
    return newAry
  },
  /*
    sortedUniqBy: function (array, [iteratee]) {
      var map = {}
      var newAry = []
      for (var i = 0; i < array.length; i++) {
        var t = iteratee(array[i])
        if (t in map) {
        } else {
          map[t] = i
        }
      }
      for (var k in map) {
        newAry.push(array[k.val])
      }
      return newAry
    },
    */

  tail: function (array) {
    var newAry = []
    for (var i = 1; i < array.length; i++) {
      newAry.push(array[i])
    }
    return newAry
  },

  take: function (array, n = 1) {
    var newAry = []
    for (var i = 0; i < n; i++) {
      if (array[i] == null) {
        break
      }
      newAry.push(array[i])
    }
    return newAry
  },

  takeRight: function (array, n = 1) {
    var newAry = []
    var start = array.length - n
    if (start < 0) {
      start = 0
    }
    for (var i = start; i < array.length; i++) {
      if (array[i] == null) {
        break
      }
      newAry.push(array[i])
    }
    return newAry
  },

  union: function (...arrays) {
    var map = {}
    var newAry = []
    for (var i = 0; i < arrays.length; i++) {
      var t = arrays[i]
      for (var j = 0; j < t.length; j++) {
        if (t[j] in map) {

        } else {
          map[t[j]] = 1
          newAry.push(t[j])
        }
      }

    }
    return newAry
  },

  uniq: function (array) {
    var map = {}
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {

      } else {
        map[array[i]] = 1
        newAry.push(array[i])
      }
    }
    return newAry
  },

  without: function (array, ...values) {
    var map = {}
    for (var j = 0; j < values.length; j++) {
      if (values[j] in map) {

      } else map[values[j]] = 1
    }

    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {

      } else newAry.push(array[i])
    }
    return newAry
  },

  xor: function (...arrays) {
    var map = {}
    var newAry = []
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < (arrays[i]).length; j++) {
        if ([arrays[i][j]] in map) {
          map[arrays[i][j]]++
        } else {
          map[arrays[i][j]] = 1
        }
      }
    }
    for (var k in map) {
      if (map[k] == 1) {
        newAry.push(Number(k))
      }
    }
    return newAry
  },


  zip: function (...arrays) {
    var newAry = []
    for (j = 0; j < arrays.length - 1; j++) {
      var arr = []
      var i = 0
      while (i < arrays.length) {
        arr.push(arrays[i][j])
        i++
      }
      newAry.push(arr)
    }
    return newAry
  },

  unzip: function (array) {
    var newAry = []
    for (var i = 0; i < array[0].length; i++) {
      var arr = []
      var j = 0
      while (j < array.length) {
        arr.push(array[j][i])
        j++
      }
      newAry.push(arr)
    }
    return newAry
  },

  /*
  countBy: function (collection, [iteratee = _.identity]) {
    var map = {}
    if (typeof iteratee == 'function') {

    }
  }
*/
  every: function (collection, predicate) {
    //collection是数组,predicate是函数
    if (Array.isArray(collection) && typeof predicate == 'function') {
      for (var i = 0; i < collection.length; i++) {
        if (!predicate(collection[i], i)) {
          return false
        }
      }
      return true
    }
    //predicate是对象,collection是数组
    if (typeof predicate == 'object' && !Array.isArray(predicate)) {
      for (var i = 0; i < collection.length; i++) {
        for (var k in predicate) {
          if (collection[i][k] !== predicate[k]) {
            return false
          }
        }
      }
      return true
    }
    //collection是数组,predicate是数组
    //这里假设predicate数组长度仅为2
    if (Array.isArray(predicate)) {
      for (var i = 0; i < collection.length; i++) {
        for (var k in collection[i]) {
          if (k == predicate[0] && collection[i][k] !== predicate[1]) {
            return false
          }
        }
      }
      return true
    }
    //collection是数组，predicate是字符串
    if (typeof predicate == 'string') {
      for (var i = 0; i < collection.length; i++) {
        for (var k in collection[i]) {
          if (k == predicate) {
            return collection[i][k]
          }
        }
      }
    }
  },

  countBy: function (collection, iteratee) {
    //collection是数组，standard是函数
    if (typeof iteratee == 'function') {
      var newAry = []
      var map = {}
      for (var i = 0; i < collection.length; i++) {
        var k = iteratee(collection[i])
        if (k in map) {
          map[k]++
        } else map[k] = 1
      }
      return map
    }
    //collection是数组，standard是字符串，这里只考虑了length
    if (typeof iteratee == 'string') {
      var map = {}
      for (var i = 0; i < collection.length; i++) {
        var num = 0
        for (var j = 0; j < collection[i].length; j++) {
          num++
        }
        if (num in map) {
          map[num]++
        } else map[num] = 1
      }
      return map
    }
  },

  groupBy: function (collection, iteratee) {
    if (typeof iteratee == 'function') {
      var map = {}
      for (var i = 0; i < collection.length; i++) {
        var k = iteratee(collection[i])
        if (k in map) {
          map[k].push(collection[i])
        } else map[k] = [collection[i]]
      }
      return map
    }
    if (typeof iteratee == 'string') {
      var map = {}
      for (var i = 0; i < collection.length; i++) {
        var num = 0
        for (var j = 0; j < collection[i].length; j++) {
          num++
        }
        if (num in map) {
          map[num].push(collection[i])
        } else map[num] = [collection[i]]
      }
      return map
    }
  },

}
