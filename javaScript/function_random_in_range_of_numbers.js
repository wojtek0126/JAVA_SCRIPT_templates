//random in specific range
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// range from 1 to selected number
const random = (rangeFrom1) => {
    return Math.floor(Math.random() * rangeFrom1);
}