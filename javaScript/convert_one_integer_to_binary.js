
const countBits = number => {
    return (number >>> 0).toString(2);
}


//or
function addBinary( a, b ){
    let sum = a + b,
        binary = '';
    while ( sum > 0 ) {
        binary = ( sum % 2 ) + binary;
        sum = Math.floor( sum / 2 );
    } return binary;
}
