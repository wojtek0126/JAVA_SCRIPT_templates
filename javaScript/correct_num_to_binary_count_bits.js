const countBits = number => {
    const bits = number.toString(2);
    return (bits.match(/1/g) || []).length; // count occurences
}

// countBits = n => n.toString(2).split('0').join('').length;