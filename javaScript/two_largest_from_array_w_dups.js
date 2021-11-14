function twoHighest(arr) {
    let arrA = arr
    let arr1 = [];
    let max1 = 0
    let count = 1
    let uniqueArray = [];
    for (let value of arrA) {
        if (uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    if (uniqueArray.length === 0) return [];
    else if (uniqueArray.length === 1) return arr
    else {
        while (count <= 2) {
            max1 = Math.max(...uniqueArray);
            uniqueArray.splice(uniqueArray.indexOf(max1), 1)
            arr1.push(max1);
            count++
        }
    }
    return arr1
}

// function twoHighest(arr) {
//     return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
//   }