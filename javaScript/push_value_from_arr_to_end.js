var moveZeros = function(arr) {
    let nonZeroes = [];
    let zeroes = [];
    arr.forEach(item => {
        if (item !== 0) nonZeroes.push(item);
        if (item === 0) zeroes.push(item);
    });
    return [...nonZeroes, ...zeroes];
}

// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
//   }