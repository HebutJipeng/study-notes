//阶乘

function muladd(n) {


  var res1 = 0,
      res2 = 0;

  for (var i = 1; i <= n; i = i + 2) {
    res1 +=(function mul(n) {
        return (n > 0)  ? (mul(n - 1) * n) : 1;
    })(i);
  }

  for (var i = 2; i  <= n; i = i+2) {
    res2 += (function mul(n) {
        return (n > 0)  ? (mul(n - 1) * n) : 1;
    })(i);
  }

  console.log(res1, "----------", res2);
}



muladd(2);
