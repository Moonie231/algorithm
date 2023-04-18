let arr = [2,3,1,5,4,3]
let sum = 0

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {
        sum += arr[i]
    }
}

console.log(sum)