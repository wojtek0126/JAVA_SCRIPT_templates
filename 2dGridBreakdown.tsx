let letterGrid = [
    'abcdefpmuj',
    'srggsasagg',
    'qwtpjrpqiw',
    'mfamaskmse',
    'bsflksmafn',
    'aqjrwqiwra',
    'tjqweeifmm',
    'mafslkfasm',
    'aoqwopwqrk',
    'nsjavaslfa',
];


// hidden words: jump, mask, java, batman, nose, art, new
// all directions left-right, right-left, up-down, down-up, diag-up, diag-down
// if different words than from list, return "sorry, not there"
// find one word at time
// find all words and put into array of words
// find all words and fit into objects
// make multipurpose clean function 
// use OOP

// see how many rows and columns grid has
let columns = letterGrid.length;
console.log(columns, "columns in the grid");
// that is correct
let rows = letterGrid[0].length;
console.log(rows, "characters in a row in the grid");
// that is correct

// summary
console.log(`this grid has ${columns} columns and ${rows} rows`);

//see how many letters are in the grid alltogether counting from top left going to the right and down to bottom

// starting with 'empty' character counter, it is equal to zero at the start
let allCharsInGrid = 0;
// first loop is iterating through all columns,  second loop is going through all letters in each  
for (let column = 0; column < columns; column++) {
    for (let letter = 0; letter < rows; letter++) {
        allCharsInGrid++;
    }
}
// log of character count in the grid
console.log(`this grid chas ${allCharsInGrid} characters alltogether`);
// that is correct, we got vertival left-to right tool ready to use

// next let's push all letters to an array






// now, let's pick a word from our list that is for sure fitting left-right vertically: java
// const word = "hummus";

// we need simply algorithm that will go through all the letters 
//left-right diagonally and if nothing matches first letter of our word, let's return "sorry, not there" 
// for (let column = 0; column < columns; column++) {
//     for (let letter = 0; letter < rows; letter++) {
//         if (rows[letter] !== word[0]) {
//             console.log("sorry, not there");
//         }
//     }
// }