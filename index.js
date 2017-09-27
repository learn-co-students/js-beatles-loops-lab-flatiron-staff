function theBeatlesPlay(musicians, instruments) {
  var output = []
  for (var i = 0; i < musicians.length; i++) {
    output.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return output
}

function johnLennonFacts (array) {
    let i = 0
    while(i < array.length) {
      array[i] = `${array[i]}!!!`
      i++
    }
  return array
}

function iLoveTheBeatles (number) {
  var new_array = []
  do {
    new_array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return new_array
}
