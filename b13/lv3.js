let arr = [2,3,1,5,4,3]
let sum = 0
let avg = 0

for (let i = 0; i < arr.length; i++){
    sum += arr[i]
    avg = sum/arr.length
}

console.log(avg)