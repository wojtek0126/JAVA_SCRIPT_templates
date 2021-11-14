function doubleChar(str) {
    var s = str;
    var out = "";
    for (var i = 0; i < s.length; i++) {
        out = out + (s[i] + s[i]);
    };
    return out;
}

// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// return str.replace(/(.)/g, "$1$1")