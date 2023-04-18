let arr = [2,3,1,5,4,3]
let max = 0
let sum = 0

for (let i = 0; i<= arr.length; i++) {
    if (arr[i] > max){
        max = arr[i]
    }

}

console.log(max)

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)