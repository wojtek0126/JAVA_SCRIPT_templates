function digitize(n) {
    let arr = [...n + ''].reverse().map(n => +n);
    return arr
}