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

  difference: function (array, ...values) {
    var newAry = []
    var flattenValues = []
    for (var k = 0; k < values.length; k++) {
      flattenValues = flattenValues.concat(this.flattenDeep(values[k]))
    }

    for (var i = 0; i < array.length; i++) {
      if (flattenValues.indexOf(array[i]) >= 0) {

      } else {
        newAry.push(array[i])
      }
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

  findIndex: function (array, predicate, fromIndex = 0) {
    for (var i = 0; i < array.length; i++) {
      if (typeof predicate == 'string') {
        if (array[i][predicate]) {
          return i
        }
      } else if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] == predicate[1]) {
          return i
        }
      } else if (typeof predicate == 'function') {
        if (predicate(array[i]) == true) {
          return i
        }
      } else if (Object.prototype.toString(predicate) == '[object Object]') {
        var flag = true
        for (var k in predicate) {
          if (k in array[i] && array[i][k] == predicate[k]) {
            continue
          } else {
            flag = false
            break
          }
        }
        if (flag == true) {
          return i
        }
      }
    }
  },

  findLastIndex: function (array, predicate, fromIndex = 0) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (typeof predicate == 'string') {
        if (array[i][predicate]) {
          return i
        }
      } else if (Array.isArray(predicate)) {
        if (array[i][predicate[0]] == predicate[1]) {
          return i
        }
      } else if (typeof predicate == 'function') {
        if (predicate(array[i]) == true) {
          return i
        }
      } else if (Object.prototype.toString(predicate) == '[object Object]') {
        var flag = true
        for (var k in predicate) {
          if (k in array[i] && array[i][k] == predicate[k]) {
            continue
          } else {
            flag = false
            break
          }
        }
        if (flag == true) {
          return i
        }
      }
    }
  },


  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var t = array[i]
        for (var j = 0; j < t.length; j++) {
          result.push(t[j])
        }
      } else result.push(array[i])
    }
    return result
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

  flattenDepth: function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array
    }
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth >= 1) {
        newAry = newAry.concat((flattenDepth(array[i], depth - 1)))
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

  sortedIndexBy: function (array, value, iteratee) {
    if (typeof iteratee == 'string') {
      for (var i = 0; i < array.length; i++) {
        if (value[iteratee] == array[i][iteratee]) {
          return i
        }
      }
    }
    if (typeof iteratee == 'function') {
      for (var i = 0; i < array.length; i++) {
        if (iteratee(value) == iteratee(array[i])) {
          return i
        }
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

  sortedLastIndexBy: function (array, value, iteratee) {
    if (typeof iteratee == 'string') {
      for (var i = array.length - 1; i >= 0; i--) {
        if (value[iteratee] == array[i][iteratee]) {
          return i + 1
        }
      }
    }
    if (typeof iteratee == 'function') {
      for (var i = array.length - 1; i >= 0; i--) {
        if (iteratee(value) == iteratee(array[i])) {
          return i + 1
        }
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

  sortedUniqBy: function (array, iteratee) {
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
      newAry.push(array[map[k]])
    }
    return newAry
  },


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

  takeRightWhile: function (array, predicate) {
    var result = []

    for (var i = array.length - 1; i >= 0; i--) {
      if (typeof predicate == 'string') {
        //predicate为假停止，否则王result里增加
        if (array[i][predicate]) {
          result.unshift(array[i])
        } else break
      } else

        if (Array.isArray(predicate)) {
          if (array[i][predicate[0]] == predicate[1]) {
            result.unshift(array[i])
          } else break
        } else

          if (typeof predicate == 'function') {
            if (predicate(array[i]) == true) {
              result.unshift(array[i])
            }
          } else

            if (Object.prototype.toString(predicate) == '[object Object]') {
              var flag = true
              for (var k in predicate) {
                if (k in array[i] && array[i][k] == predicate[k]) {
                  continue
                } else {
                  flag = false
                  break
                }
              }
              if (flag == true) {
                result.unshift(array[i])
              }
            }
    }
    return result

  },

  takeWhile: function (array, predicate) {
    var result = []

    for (var i = 0; i < array.length; i++) {
      if (typeof predicate == 'string') {
        //predicate为假停止，否则王result里增加
        if (array[i][predicate]) {
          result.pushpush(array[i])
        } else break
      } else

        if (Array.isArray(predicate)) {
          if (array[i][predicate[0]] == predicate[1]) {
            result.push(array[i])
          } else break
        } else

          if (typeof predicate == 'function') {
            if (predicate(array[i]) == true) {
              result.push(array[i])
            }
          } else

            if (Object.prototype.toString(predicate) == '[object Object]') {
              var flag = true
              for (var k in predicate) {
                if (k in array[i] && array[i][k] == predicate[k]) {
                  continue
                } else {
                  flag = false
                  break
                }
              }
              if (flag == true) {
                result.push(array[i])
              }
            }
    }
    return result
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
    /*
      union: function (...arrays) {
        var result = []
        for (var array of arrays) {
          for (var item of array) {
            if (!result.includes(item)) {
              result.push(item)
            }
          }
        }
        return result
      },
    */
  },


  unionBy: function (...arrays) {
    var iteratee = arrays[arrays.length - 1] //oops
    var map = {}
    var newAry = []
    for (var i = 0; i < arrays.length - 1; i++) {

      if (typeof iteratee == 'function') {
        var t = arrays[i]
        for (var j = 0; j < t.length; j++) {
          if (iteratee(t[j]) in map) {

          } else {
            map[iteratee(t[j])] = 1
            newAry.push(t[j])
          }
        }
      }
      if (typeof iteratee == 'string') {
        var t = arrays[i]
        for (var j = 0; j < t.length; j++) {
          if (t[j][iteratee] in map) {

          } else {
            map[t[j][iteratee]] = 1
            newAry.push(t[j])
          }
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

  uniqBy: function (array, iteratee) {
    if (typeof (iteratee) === 'string') {
      var func = (obj) => obj[iteratee]
    } else if (typeof iteratee == 'function') {
      var func = iteratee
    }
    var set = new Set()
    var result = []
    for (var item of array) {
      var t = func(item)
      if (!set.has(t)) {
        result.push(item)
        set.add(t)
      }
    }
    return result
  },

  uniqWith: function (array, predicate) {
    var result = []
    for (var item of array) {
      var seen = false
      for (var p of result) {
        if (predicate(p, item)) {
          seen = true
        }
      }
      if (!seen) {
        result.push(item)
      }
    }
    return result
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

  size: function (collection) {
    if (Array.isArray(collection)) {
      return collection.length
    } else if (typeof collection == 'object') {
      var arr = []
      for (var keys in collection) {
        arr.push(keys)
      }
      return arr.length
    } else if (typeof collection == 'string') {
      return collection.length
    }
  },

  filter: function (collection, predicate) {
    var result = []
    for (var i = 0; i < collection.length; i++) {
      if (typeof predicate == 'string') {
        if (collection[i][predicate]) {
          result.push(collection[i])
        }
      } else if (Array.isArray(predicate)) {
        if (collection[i][predicate[0]] == predicate[1]) {
          result.push(collection[i])
        }
      } else if (typeof predicate == 'function') {
        if (predicate(collection[i]) == true) {
          result.push(collection[i])
        }
      } else if (Object.prototype.toString(predicate) == '[object Object]') {
        var flag = true
        for (var k in predicate) {
          if (k in collection[i] && collection[i][k] == predicate[k]) {
            continue
          } else {
            flag = false
            break
          }
        }
        if (flag == true) {
          result.push(collection[i])
        }
      }
    }
    return result
  },

  find: function (collection, predicate) {
    if (typeof predicate == 'string') {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i][predicate]) {
          return collection[i]
        }
      }
    }
    if (Array.isArray(predicate)) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i][predicate[0]] == predicate[1]) {
          return collection[i]
        }
      }
    }
    if (typeof predicate == 'function') {
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) == true) {
          return collection[i]
        }
      }
    }
    if (Object.prototype.toString(predicate) == '[object Object]') {
      for (var i = 0; i < collection.length; i++) {
        var flag = true
        for (var k in predicate) {
          if (k in collection[i] && collection[i][k] == predicate[k]) {
            continue
          } else {
            flag = false
            break
          }
        }
        if (flag == true) {
          return collection[i]
        }
      }
    }
  },

  findLast: function (collection, predicate, fromIndex = collection.length - 1) {
    if (typeof predicate == 'string') {
      for (var i = collection.length - 1; i >= 0; i--) {
        if (collection[i][predicate]) {
          return collection[i]
        }
      }
    }
    if (Array.isArray(predicate)) {
      for (var i = collection.length - 1; i >= 0; i--) {
        if (collection[i][predicate[0]] == predicate[1]) {
          return collection[i]
        }
      }
    }
    if (typeof predicate == 'function') {
      for (var i = collection.length - 1; i >= 0; i--) {
        if (predicate(collection[i]) == true) {
          return collection[i]
        }
      }
    }
    if (Object.prototype.toString(predicate) == '[object Object]') {
      for (var i = collection.length - 1; i >= 0; i--) {
        var flag = true
        for (var k in predicate) {
          if (k in collection[i] && collection[i][k] == predicate[k]) {
            continue
          } else {
            flag = false
            break
          }
        }
        if (flag == true) {
          return collection[i]
        }
      }
    }
  },

  flatMap: function (collection, predicate) {
    var newAry = []
    for (var k in collection) {
      newAry.push(predicate(collection[k]))
    }
    return this.flattenDeep(newAry)
  },

  flatMapDeep: function (collection, predicate) {
    var newAry = []
    for (var k in collection) {
      newAry.push(predicate(collection[k]))
    }
    return this.flattenDeep(newAry)
  },

  flatMapDepth: function (collection, predicate, depth = 1) {
    var newAry = []
    for (var k in collection) {
      newAry.push(predicate(collection[k]))
    }
    return this.flattenDepth(newAry, depth)
  },

  forEach: function forEach(ary, action) {
    if (Array.isArray(ary)) {
      for (var i = 0; i < ary.length; i++) {
        var current = ary[i]
        action(current, i, ary) //每一次调用传入当前函数
      }
    } else {
      for (var key in ary) {
        var value = ary[key]
        action(value, key)
      }
    }
    return ary
  },

  forEachRight: function (ary, action) {
    if (Array.isArray(ary)) {
      for (var i = ary.length - 1; i >= 0; i--) {
        var current = ary[i]
        action(current, i, ary) //每一次调用传入当前函数
      }
    } else {
      for (var key in ary) {
        var value = ary[key]
        action(value, key)
      }
    }
    return ary
  },

  includes: function (collection, value, fromIndex = 0) {
    if (Array.isArray(collection)) {
      for (var i = fromIndex; i < collection.length; i++) {
        if (collection[i] == value) {
          return true
        }
      }
      return false
    } else if (typeof collection == 'object') {
      for (var k in collection) {
        if (collection[k] == value) {
          return true
        }
      }
      return false
    } else if (typeof collection == 'string') {
      for (var i = fromIndex; i < collection.length; i++) {
        var j = 0
        if (collection.indexOf(value) == -1) {
          return false
        }
      }
      return true
    }
  },

  keyBy: function (collection, iteratee) {
    var map = {}
    for (var i = 0; i < collection.length; i++) {
      if (typeof iteratee == 'function') {
        map[iteratee(collection[i])] = collection[i]
      }
      if (typeof iteratee == 'string') {
        map[collection[i][iteratee]] = collection[i]
      }
    }
    return map
  },

  map: function (collection, iteratee) {
    var res = []
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (typeof iteratee == 'function') {
          if (Array.isArray(collection)) {
            res.push(iteratee(collection[i]))
          }
        }
        if (typeof iteratee == 'string') {
          res.push(collection[i][iteratee])
        }
      }

    } else if (Object.prototype.toString(collection) == '[object Object]') {
      for (var key in collection) {
        res.push(iteratee(collection[key]))
      }
    }
    return res
  },

  partition: function (array, predicate) {
    var trueArr = []
    var falseArr = []
    var res = []

    if (typeof predicate == 'string') {
      for (var i = 0; i < array.length; i++) {
        if (array[i][predicate] == true) {
          trueArr.push(array[i])
        } else {
          falseArr.push(array[i])
        }
      }
      res.push(trueArr, falseArr)
      return res
    }

    if (typeof predicate == 'function') {
      for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]) == true) {
          trueArr.push(array[i])
        } else {
          falseArr.push(array[i])
        }
      }
      res.push(trueArr, falseArr)
      return res
    }

    if (Array.isArray(predicate)) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][predicate[0]] == predicate[1]) {
          trueArr.push(array[i])
        } else {
          falseArr.push(array[i])
        }
      }
      res.push(trueArr, falseArr)
      return res
    }

    if (Object.prototype.toString(predicate) == '[object Object]') {
      for (var i = 0; i < array.length; i++) {
        for (var k in predicate) {
          if (predicate[k] != array[i][k]) {
            falseArr.push(array[i])
            break
          } else {
            trueArr.push(array[i])
            break
          }
        }
      }
      res.push(trueArr, falseArr)
      return res
    }
  },

  reduce: function (collection, reducer, initialValue) {
    var result = initialValue
    var start = 0

    if (Array.isArray(collection)) {
      if (initialValue == undefined) {
        result = collection[0]
        start = 1
      }
      for (var i = start; i < collection.length; i++) {
        result = reducer(result, collection[i], i, collection)
      }
      return result
    }

    if (Object.prototype.toString(collection) == '[object Object]') {
      for (var k in collection) {
        result = reducer(result, collection[k], k, collection)
      }
      return result
    }
  },

  reduceRight: function (collection, reducer, initialValue) {
    var result = initialValue
    for (var i = collection.length - 1; i >= 0; i--) {
      result = reducer(result, collection[i], i, collection)
    }
    return result
  },

  reject: function (collection, predicate) {
    var result = []
    for (var i = 0; i < collection.length; i++) {
      if (typeof predicate == 'string') {
        if (!(collection[i][predicate])) {
          result.push(collection[i])
        }
      } else
        if (Array.isArray(predicate)) {
          if (collection[i][predicate[0]] != predicate[1]) {
            result.push(collection[i])
          }
        } else
          if (typeof predicate == 'function') {
            if (predicate(collection[i]) == false) {
              result.push(collection[i])
            }
          } else
            if (Object.prototype.toString(predicate) == '[object Object]') {
              var flag = true
              for (var k in predicate) {
                if (k in collection[i] && collection[i][k] == predicate[k]) {
                  continue
                } else {
                  flag = false
                  break
                }
              }
              if (flag == false) {
                result.push(collection[i])
              }
            }
    }
    return result
  },

  sample: function (collection) {
    return collection[Math.floor(Math.random() * collection.length)]
  },

  shuffle: function (collection) {
    var array = collection
    var i = array.length
    while (i--) {
      var j = Math.floor((Math.random() * i))
      var t = array[i]
      array[i] = array[j]
      array[j] = t
    }
    return array
  },

  some: function (collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
      if (typeof predicate == 'string') {
        if (collection[i][predicate]) {
          return true
        }
      } else
        if (Array.isArray(predicate)) {
          if (collection[i][predicate[0]] == predicate[1]) {
            return true
          }
        } else
          if (typeof predicate == 'function') {
            if (predicate(collection[i]) == true) {
              return true
            }
          } else
            if (Object.prototype.toString(predicate) == '[object Object]') {
              var flag = true
              for (var k in predicate) {
                if (k in collection[i] && collection[i][k] == predicate[k]) {
                  continue
                } else {
                  flag = false
                  break
                }
              }
              if (flag == true) {
                return true
              }
            }
    }
    return false
  },

  castArray: function (value) {
    var result = []
    if (arguments.length == 0) {
      return []
    } else
      return [value]
  },


  isArray: function (value) {
    return Object.getPrototypeOf(value) == Array.prototype
  },

  isArrayLike: function (value) {
    if (typeof value == 'function') {
      return false
    } else if (arguments.length == 0) {
      return false
    } else if (value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER) {
      return true
    }
  },

  isBoolean: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == Boolean.prototype
  },

  isDate: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == Date.prototype
  },

  isElement: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == HTMLBodyElement.prototype
  },

  isError: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == Error.prototype
  },

  isFinite: function (value) {
    if (typeof value !== 'number') {
      return false
    } else if (value == 'Infinity' || value == '-Infinity') {
      return false
    } else return true
  },

  isFunction: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == Function.prototype
  },

  isInteger: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Number.isInteger(value)
  },

  isLength: function (value) {
    if (typeof value != 'number') {
      return false
    }
    if (max0630.isInteger(value) == false) {
      return false
    }
    if (value <= 2 ** 53 - 1 && value >= 0) {
      return true
    }
  },

  isMap: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == Map.prototype
  },

  isMatch: function (obj, target) {
    for (var key in target) {
      if (key in obj) {
        if (obj[key] == target[key]) {
          return true
        }
      }
    }
    return false
  },

  isNaN: function (value) {
    if (typeof value == 'object' && value.prototype == Number.prototype) {
      return true
    } else if (value !== value) {
      return true
    } else return false
  },

  isNull: function (value) {
    return value === null
  },

  isNil: function (value) {
    return value == null
  },

  isNumber: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else
      return Object.getPrototypeOf(value) == Number.prototype
  },

  isObject: function (value) {
    if (value == null || value == 'undefined') {
      return false
    } else if (typeof value == 'object') {
      return true
    } else return false
  },








}
