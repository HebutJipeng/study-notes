const hexToRGB = (h) => {
  let r = toR(h)
  console.log('-->', r)
  if (r.length == 0) {
    return null
  } else {
    return `rgb(${r[0]}, ${r[1]}, ${r[2]})`
  }
} 

const toR = (hex) => {
  let rgb = [];
  console.log(hex[0] != '#')
  if(hex[0] != '#' || hex.length !== 4 && hex.length != 7) return rgb;
  console.log(111)
  hex = hex.toLowerCase().replace('#', '')
  if(hex.length < 5) {
    for (x of hex) {
      rgb.push(parseInt(x+x, 16))
    }
  } else {
    var _temp = '';
    for (var i = 0; i < hex.length; i++) {
      _temp += hex[i]
      if (i % 2 == 1) {
        rgb.push(parseInt(_temp, 16)) 
        _temp = ''
      }
    }
  }
  return rgb
}

hexToRGB('#bA4892')