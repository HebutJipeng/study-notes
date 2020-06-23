function jsonp (req) {
    var script = document.createElement('script')
    var url = req.url + '?callback=' + req.callback.name
    script.url = url
    script.onload = function () {
        
    }
    script.onerror = function () {
        
    }
    document.body.appendChild(script)
}


// 考虑err之类的
// 如果需要考虑浏览器gc的话，不仅要回收dom，还要回收匿名函数所占的内存