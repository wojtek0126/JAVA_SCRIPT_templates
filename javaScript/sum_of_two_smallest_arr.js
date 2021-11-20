function sumTwoSmallestNumbers(numbers) {
    let arr = numbers
    let processed = []
    const max1 = Math.min(...arr);
    processed.push(max1)
    arr.splice(arr.indexOf(max1), 1);
    const max2 = Math.min(...arr);
    processed.push(max2)
    return processed.reduce((a, b) => a + b)
}