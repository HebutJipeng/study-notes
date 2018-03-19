let convert = (text, row) => {
  const l = text.length
  let arr = []

  const loop = row * 2 - 2
  let count = 0

  for (let i = 0; i< l; i++) {
    

    if (count < row) {
      if (!arr[i % loop]) {
        arr[i % loop] = []
      }
      arr[i % loop].push(text[i])
    } else {
      arr[loop - i % loop].push(text[i])
    }

    count ++ 
    if (count == loop) {
      count = 0
    }
  }

  return arr
}