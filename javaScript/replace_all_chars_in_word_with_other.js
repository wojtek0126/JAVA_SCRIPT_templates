function DNAtoRNA(dna) {
    const code = dna;

    const newText = code.replace(/T/g, "U");
    console.log(newText);
    return newText;
}

// 2nd
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}