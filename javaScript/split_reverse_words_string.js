function reverseWords(str) {
    const string = str;
    const splitStr = string.split(" "); // split each word with comma into array
    const arr = [];
    let count = splitStr.length - 1;
    for (let i = 0; i < splitStr.length; i++) {
        arr.push(splitStr[count]);
        count--
    }
    const joined = arr.join(" ")
    return joined
}

//  function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }