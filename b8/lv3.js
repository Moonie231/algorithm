let a = 800
let b = a/365

if (b % 1 === 0) {
    console.log(b + " nam")
    console.log(0 + " thang")
    console.log(0 + " ngay")
}else {
    let c = Math.floor(b)
    a = a-c*365
    let d = a/30
    if (d % 1 === 0){
        console.log(c + " nam")
        console.log(d + " thang")
        console.log(0 + " ngay")
    }else {
        let e = Math.floor(d)
        a = a-e*30
        console.log(c + " nam")
        console.log(e + " thang")
        console.log(a + " ngay")
    }
}