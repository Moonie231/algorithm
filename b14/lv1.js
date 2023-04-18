let arr = [2,3,1,5,4,3]

for (let i = 0; i <= arr.length; i++){
    if (arr[i] > arr[i + 1]){
        console.log('mang k tang dan')
        break
    }else {
        console.log('mang tang dan')
    }
}