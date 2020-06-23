// 200
// 100

var a = 100
function create() {
    var a = 200
    return function () {
        alert(a)
    }
}
var fn = create()
fn()


var a = 100
function invoke(fn) {
    var a = 200
    fn()
}

function fn() {
    alert(a)
}

invoke(fn)