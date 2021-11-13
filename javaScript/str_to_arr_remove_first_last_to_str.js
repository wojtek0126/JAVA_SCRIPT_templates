function array(arr) {
    const arrIn = arr;
    const arrIntoArray = arrIn.split(",");
    arrIntoArray.shift();
    arrIntoArray.pop();
    const arrToString = arrIntoArray.toString();
    const finalStrNoCommas = arrToString.replace(/,/g, " ");
    if (finalStrNoCommas === "") {
        return null
    } else {
        return finalStrNoCommas
    }
}