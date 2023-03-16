var a=0,
    b=0;
function A(a){
    A = function(b){
            console.log('xx', a, b)
            alert(a+b++); // 2 + 2
    }
    console.log('yy', a, b, A)
    alert(a++); // 1 
}
A(1); 
A(2);