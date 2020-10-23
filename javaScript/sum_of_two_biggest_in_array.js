const biggestSumOfTwoElements = (array) => {
    const newArr = array.sort()
    return newArr[newArr.length - 1] + newArr[newArr.length -2];
}

const arr = [1,2,7,4];
const sum = biggestSumOfTwoElements(arr);
console.log(sum);