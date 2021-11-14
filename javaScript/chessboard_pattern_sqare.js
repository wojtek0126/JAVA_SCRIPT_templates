function generateShape(integer) {
    let string = ""
    const pattern = "+"
    const breakLine = "\n"
    for (let i = 1; i <= integer; i++) {
        for (let j = 1; j <= integer; j++) {
            string += pattern
            if (j === integer) string += breakLine
        }
    }
    const trimmed = string.slice(0, -1); // cut last linebreak from string result
    console.log(trimmed)
    return trimmed
}

// function generateShape(n){
//     return ("+".repeat(n)+"\n").repeat(n).trim()
//   }