var fib = [0, 1];
for (var i = fib.length; i < 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib);

// function fibonacci(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : fibonacci(n - 1) + fibonacci(n - 2)
//  }

//  console.log(fibonacci(4))

// fibonacci(4)   .--------> 2 + 1 = 3
// |          /               |
// '--> fibonacci(3) + fibonacci(2)
//       |    ^           
//       |    '----------- 2 = 1 + 1 <----------.
//     1st step -> |                     ^                |
//       |                     |                |
//       '---->  fibonacci(2) -' + fibonacci(1)-'