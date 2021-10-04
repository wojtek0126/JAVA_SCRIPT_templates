const mergeArrays = (array1, array2) => {
    const mergedArray = array1.concat(array2);
    return mergedArray;

}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const merged = mergeArrays(arr1, arr2);
console.log(merged);