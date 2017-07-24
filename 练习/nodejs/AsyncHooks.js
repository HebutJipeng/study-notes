const async_hooks = require('async_hooks')

const cid = async_hooks.currentId()
console.log(cid)