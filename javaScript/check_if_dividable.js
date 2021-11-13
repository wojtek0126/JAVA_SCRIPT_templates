function isDivideBy(number, a, b) {
    const numberA = number;
    const numA = a;
    const numB = b;
    if (number % numA === 0 && number % numB === 0) {
        return true;
    } else {
        return false;
    };
}