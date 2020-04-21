function deepCopy(source) {
   let targetObject = source.constructor === Array ? []  : {}

   for (let key in source) {
       if (source.hasOwnProperty(key)) {
           if (source[key] && typeof source[key] === 'object') {
               targetObject[key] = source[key].constructor === Array ? [] : {}
               targetObject[key] = deepCopy(source[key])
           } else {
                targetObject[key] = source[key]
           }
       }
   }

   return targetObject
}