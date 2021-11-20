function sumStrings(a, b) {
    console.log(a, "a")
    console.log(b, "b")
    if (a !== "" && b !== "") {
        const sum = BigInt(a) + BigInt(b)
        return sum.toString()
    } else if (a === "") {
        const sum = b
        return sum.toString()
    }

}