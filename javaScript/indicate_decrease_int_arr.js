var isMonotone = function(arr) {
    let indicate = true
    for (i = 0; i < arr.length - 1; i++) {
        console.log(arr[i], " first")
        console.log(arr[i + 1], "next")
        console.log(arr[i + 1] - arr[i], "next minus first")
        if (arr[i + 1] - arr[i] > 0) {
            indicate = true
        } else if (arr[i + 1] - arr[i] < 0) {
            indicate = false
            break
        } else if (arr[i + 1] - arr[i] === 0) {
            indicate = true
        }
    }
    return indicate
}

// var isMonotone = function(arr){
//     return arr.every(function(x, idx) {
//       return idx === 0 ? true : arr[idx] >= arr[idx-1];
//     });
//   }