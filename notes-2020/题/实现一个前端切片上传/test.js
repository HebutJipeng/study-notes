
var urls = [
    'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 
    'https://www.kkkk1000.com/images/getImgData/gray.gif', 
    'https://www.kkkk1000.com/images/getImgData/Particle.gif', 
    'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 
    'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 
    'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 
    'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 
    'https://www.kkkk1000.com/images/wxQrCode2.png'
    ];
    function loadImg(url) {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = function () {
                console.log('一张图片加载完成');
                resolve(url);
            }
            img.onerror = reject
            img.src = url
        })
    };
    
//省略代码
function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    return new Promise(resolve => {
        const sequence = [].concat(urls)
        let promises = [];
        const l = urls.length
        let re = []
        let idx = 0 

        //并发请求到最大数
        promises = sequence.splice(0, limit).map((url, index) => {
            // 这里返回的 index 是任务在 promises 的脚标，
            //用于在 Promise.race 之后找到完成的任务脚标
            return handler(url).then(re1 => {
                // console.log('======zhan =>真实结束=>', index)
                re[idx++] = re1
                if (idx === l) {
                    resolve(re)
                }
                return index
            });
        });

        let p = Promise.race(promises);
        for (let i = 0; i < sequence.length; i++) {
            p = p.then((res) => {
                promises[res] = handler(sequence[i]).then(re2 => {
                    // console.log('======zhan =>', res,'真实结束=>',  i)
                    re[idx++] = re2
                    if (idx === l) {
                        resolve(re)
                    }
                    return res
                });
                return Promise.race(promises)
            })
        }
    })
}
limitLoad(urls, loadImg, 2).then(res => {
    console.log(res)
})