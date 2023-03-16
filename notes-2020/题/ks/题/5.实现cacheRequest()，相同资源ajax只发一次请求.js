// https://juejin.im/post/5e745f85f265da57340262c3
const cacheRequest = function(url) {
    const dist = new Map()

    if (dist.get(url)) {
        return Promise.resolve(dist.get(url))
    } else {
        return request(url).then(res => {
            dist.set(url, res)
            return res
        }).cache(err => Promise.reject(err))
    }
}

// 简单的写法如此，但是复杂的写法还要考虑 pending状态下，如何获取缓存的问题