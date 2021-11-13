function repeatStr(n, s) {
    let word = []
    for (let i = 1; i <= n; i++) {
        word.push(s)
        console.log(word)
    }
    let conc = word.join("")
    return conc
}