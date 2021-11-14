const countBits = number => {
    const bits = number.toString(2);
    return (bits.match(/1/g) || []).length; // count occurences
}