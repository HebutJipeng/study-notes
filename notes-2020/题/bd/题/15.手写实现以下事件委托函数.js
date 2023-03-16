function delegate(parent, selector, handle) {
    parent.addEventListener('click', function (e) {
        const event = e || window.event
        const target = event.target || event.srcElement;// 兼容老IE
        if (target.classList.contains(selector)) {
            handle.call(target, e)
        }
    }, false)
}