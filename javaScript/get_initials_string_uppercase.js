function abbrevName(name) {
    let arr = name.split(" ");
    let arr1 = [];
    arr.forEach(word => arr1.push(word[0]));
    let arr2 = arr1.join(".")
    const result = arr2.toUpperCase();
    return result
}

// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }