function sumStr(a, b) {
    let numA = a;
    let numB = b;

    if (numA === "") {
        numA = 0;
    } else {
        numA = parseInt(a)

    }
    if (numB === "") {
        numB = 0;
    } else {
        numB = parseInt(b);
    };

    const sum = numA + numB;
    const sumStr = String(sum);

    return sumStr;
}

// sumStr = (a,b) => String(+a + +b);