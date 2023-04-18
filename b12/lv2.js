let arr = [2,4,3,1,6]
let sum = 0

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += i
    }
}

console.log(sum)