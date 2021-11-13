// it turns minus to plus if value is minus

function findDifference(a, b) {
    arrA = a;
    arrB = b;
    multiplyA = arrA.reduce((a, b) => a * b);
    multiplyB = arrB.reduce((a, b) => a * b);
    const sum = multiplyA - multiplyB
    return Math.abs(sum)
}