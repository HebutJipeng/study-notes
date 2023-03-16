setTimeout(() => {
    console.log(100)    
});

console.log(200)

Promise.resolve().then(function () {
    console.log(300)
})