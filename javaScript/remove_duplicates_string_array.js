function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
        if (uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}

console.log(getUnique(match));