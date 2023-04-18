let arr = [3,1,4,5,2]

for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
        console.log(arr[i])
    }
}