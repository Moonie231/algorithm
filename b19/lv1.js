let arr = [2,3,1,5,4,7]

for (var i = 0; i < arr.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        var tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
}
console.log(arr)