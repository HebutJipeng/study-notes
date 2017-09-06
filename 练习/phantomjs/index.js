var page = require('webpage').create();
phantom.outputEncoding = "utf-8"; //指定编码方式
page.open("http://news.163.com/", function(status) {
    if (status === "success") {
        console.log(page.title); //输出网页标题
    } else {
        console.log("网页加载失败");
    }
    phantom.exit(0); //退出系统
});