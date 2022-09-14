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
      array.unshift()
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



}
