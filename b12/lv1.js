let arr = [2,3,1,5,4,3]
let sum = 0

for (let i = 1; i <= arr.length; i+=2) {
    sum += arr[i]
}

console.log(sum)