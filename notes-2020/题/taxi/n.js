Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })