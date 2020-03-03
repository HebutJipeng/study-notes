// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000);
// }
var a = [{
    "key": "Accept",
    "value": "application/json, text/plain, */*",
    "description": "",
    "enabled": true
}, {
    "key": "Accept-Encoding",
    "value": "gzip, deflate, br",
    "description": "",
    "enabled": true
}, {
    "key": "Accept-Language",
    "value": "zh-CN,zh;q=0.9",
    "description": "",
    "enabled": true
}, {
    "key": "Authorization",
    "value": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YWQ5NWNmZjc4ZGRhNTMxMDU2M2RhN2UiLCJ1c2VybmFtZSI6IlBlbmdfSGkiLCJhdmF0YXIiOiJodHRwczovL3N0YXRpYzEua2VlcGNkbnMuY29tL2F2YXRhci8yMDE4LzA0LzIwLzExLzZlMmZkZjE0MjA3ZTYxNjFlY2VmZTM3YTIwYzU3ODI2MjA5MWM5Y2MuanBnIiwibG9naW5UeXBlIjoiZW1haWwiLCJnZW5kZXIiOiJNIiwiaXNzIjoiaHR0cDovL3d3dy5nb3Rva2VlcC5jb20vIiwiZXhwIjoxNTI5MDQ4NzY3LCJpYXQiOjE1MjY0NTY3Njd9.b6rCa5eG2n1CXQg_s503LF8feVu3Rwmp9DoAUsna-xg",
    "description": "",
    "enabled": true
}, {
    "key": "Connection",
    "value": "keep-alive",
    "description": "",
    "enabled": true
}, {
    "key": "Cookie",
    "value": "authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YWQ5NWNmZjc4ZGRhNTMxMDU2M2RhN2UiLCJ1c2VybmFtZSI6IlBlbmdfSGkiLCJhdmF0YXIiOiJodHRwczovL3N0YXRpYzEua2VlcGNkbnMuY29tL2F2YXRhci8yMDE4LzA0LzIwLzExLzZlMmZkZjE0MjA3ZTYxNjFlY2VmZTM3YTIwYzU3ODI2MjA5MWM5Y2MuanBnIiwibG9naW5UeXBlIjoiZW1haWwiLCJnZW5kZXIiOiJNIiwiaXNzIjoiaHR0cDovL3d3dy5nb3Rva2VlcC5jb20vIiwiZXhwIjoxNTMwNDE5MTg3LCJpYXQiOjE1Mjc4MjcxODd9.o1ZGs0X5D7iMFEWkoIPeuLMHZDFSRjLuzXewTklSCyQ; cms:session=eyJsZGFwVXNlcm5hbWUiOiJqaXBlbmciLCJwYXNzd29yZCI6IiIsIl9leHBpcmUiOjE1Mzc0MjMzOTg2MzAsIl9tYXhBZ2UiOjg2NDAwMDAwMDB9; cms:session.sig=OU4H2XKpH1byq2hPIhBk0zMZ1Hc; _ga=GA1.2.421585138.1530245172; x-request-id=0c81d8fea93b5f3d1377dd14856190ac; ldapUsername=jipeng; ldapUsername.sig=DJmre-4yb96uuqRoJWIFRr-6-vA",
    "description": "",
    "enabled": true
}, {
    "key": "Host",
    "value": "cms.pre.keepkeep.com",
    "description": "",
    "enabled": true
}, {
    "key": "Referer",
    "value": "https://cms.pre.keepkeep.com/music/setting",
    "description": "",
    "enabled": true
}, {
    "key": "User-Agent",
    "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    "description": "",
    "enabled": true
}, {
    "key": "x-lcid",
    "value": "zh-CN",
    "description": "",
    "enabled": true
}]

var obj = {}

a.forEach(item => {
    obj[item.key] = item.value
})

console.log(obj)