setImmediate(function(){
    console.log(1);
  },0);
  setTimeout(function(){
    console.log(2);
  },0);
  new Promise(function(resolve){
    console.log(3);
    resolve();
    console.log(4);
  }).then(function(){
    console.log(5);
  });
  console.log(6);
  process.nextTick(function(){
    console.log(7);
  });
  console.log(8);


  //加入两个nextTick的回调函数
process.nextTick(function () {
    console.log('nextTick延迟执行1');
  });
  process.nextTick(function () { 
    console.log('nextTick延迟执行2');
  });
  // 加入两个setImmediate()的回调函数
  setImmediate(function () {
    console.log('setImmediate延迟执行1'); 
    // 进入下次循环 
    process.nextTick(function () {
      console.log('强势插入');
    });
  });
  setImmediate(function () {
    console.log('setImmediate延迟执行2'); 
  });
   
  console.log('正常执行');