var url = "http://www.keep.com/index?key0=0&key1=1&key2=2"

function parseUrlQuery(url) {
   let query = url.split('?')[1].split('&')
   let obj = {}
   query.forEach(item => {
       let tem = item.split('=')
       obj[tem[0]] = tem[1]
   })
   return obj
}

let b = parseUrlQuery(url).key1
console.log(b)