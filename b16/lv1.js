let arr = [2,3,1,5,4,7]
let arr2 = [3,5,8,2,9]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
            console.log(arr[i])
        }
    }
}