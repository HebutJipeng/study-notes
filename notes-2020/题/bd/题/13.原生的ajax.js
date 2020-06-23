function ajax({
    url,
    method = 'post',
    data,
    headers = {}
}) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
            resolve(e.target.response)
        }
    })
}