let arr = ['1', '2'];

arr.push('end');
arr.unshift('start');
// es6
arr = ['start', ...arr];
arr = [...arr, 'end'];

arr = ['start', ...arr, 'end'];