let arr = [2,3,1,5,4,3]
let sum1 = 0
let sum2 = 0

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum1 += arr[i]
    }else {
        sum2 += arr[i]
    }
}

if (sum1> sum2) {
    console.log('tong chan lon hon')
}else {
    console.log('tong le lon hon')
}