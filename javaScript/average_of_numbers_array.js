function find_average(array) {
    const arr = array
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    if (arr.length === 0) {
        return 0
    } else {
        return average;
    }
}

// function betterThanAverage(classPoints, yourPoints) {
//     const avg = classPoints.reduce((a,b) => a + b, 0) / classPoints.length;
//     return yourPoints > avg ? true : false
//   }