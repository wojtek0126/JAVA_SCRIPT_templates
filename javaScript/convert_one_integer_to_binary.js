const countBits = number => {
    let arr = [];
    let arrSpread = [];
    arr.push((number >>> 0).toString(2));
    // arr.map(function (e) {
    //     arrSpread.push(e);
    // })
    return arr
}
console.log(countBits(3));

//or
// function addBinary( a, b ){
//     let sum = a + b,
//         binary = '';
//     while ( sum > 0 ) {
//         binary = ( sum % 2 ) + binary;
//         sum = Math.floor( sum / 2 );
//     } return binary;
// }


// n.toString(2); --->this one is one faultless!!!! above have missing one bit in some cases!!!