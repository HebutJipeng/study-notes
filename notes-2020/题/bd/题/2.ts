function throttle(limit: number = 0) {
    let flag = true
    return (target: any, key: string, descriptor: any) => {
        let func = descriptor.value
        descriptor.value = async (...args: any[]) => {
            if(!flag) return 
            flag = false
            try {
                func.apply(this, ...args)
            } catch (error) {
                console.log(error)    
            }
            if (!limit) return flag = true
            setTimeout(() => {
                flag = true
            }, limit);
        }
    }
}

class TestD{
    @throttle(2000)
    fn() {
      console.log('fn')
    }
}

const testd = new TestD()
setInterval(testd.fn,50);