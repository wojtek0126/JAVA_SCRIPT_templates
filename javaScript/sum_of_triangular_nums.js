function sumTriangularNumbers(n) {
    let sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i * (i + 1) / 2 // triangular numbers formula
    }
    console.log(sum)
    return sum
}

// function sumTriangularNumbers(n) {
//     return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
//   }