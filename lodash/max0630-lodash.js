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
        newAry.push(k)
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

        } else map[t[j]] = 1
      }
    }
    for (var k in map) {
      newAry.push(k)
    }
    return newAry
  }

}
