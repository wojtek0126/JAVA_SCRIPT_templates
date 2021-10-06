//WIP OOP
class WordSearch {
    // letterGrid: any;
    // word: any;
    constructor(letterGrid) {
        this.letterGrid = letterGrid;
    }

    find(word) {
        [this.word] = word;



        let R, C;

        let x = [-1, -1, -1, 0, 0, 1, 1, 1];

        let y = [-1, 0, 1, -1, 1, -1, 0, 1];


        function search2D(grid, row, col, word = this.word) {

            if (grid[row][col] != word[0])
                return false;

            let len = word.length;

            // loop goes 8 times
            for (let direction = 0; direction < 8; direction++) {

                // each loop iteration rd is different: -1,-1,-1,0,0,1,1,1       
                let k,
                    rd = row + x[direction],
                    // each loop iter cd is different -1, 0, 1, -1,-1,-1,0,1    
                    cd = col + y[direction];


                for (k = 1; k < len; k++) {

                    if (rd >= R || rd < 0 || cd >= C || cd < 0)
                        break;


                    if (grid[rd][cd] != word[k])
                        break;


                    rd += x[direction];
                    cd += y[direction];
                }


                if (k == len)
                    return true;
            }
            return false;
        }


        function patternSearch(grid, word = this.word) {
            let resultStart = [];
            let resultEnd = [];
            let resultEndReversed = []
            let result = {
                [word]: {
                    start: resultStart,
                    end: resultEnd,
                    endRightLeft: resultEndReversed
                }
            };

            for (let row = 0; row < R; row++) {
                for (let col = 0; col < C; col++) {
                    if (search2D(grid, row, col, word)) {
                        resultStart.push(row + 1, col + 1);
                        resultEnd.push(row + 1, col + word.length);
                        resultEndReversed.push(row + 1, col - word.length + 2);
                    }
                }
            }
            return result;
        }



        R = this.letterGrid[0].length;
        C = this.letterGrid.length;

        return patternSearch(this.letterGrid, this.word)

    }
}

let letterGrid = ['abcdefghij',
    'saggsasagg',
    'qwopjrpqis',
    'mfaslkfmsa',
    'msflksmafl',
    'oqjrwqiwra',
    'ijqwrjifmm',
    'mafslkfasm',
    'koavajqrku',
    'sujavaulfa',
];

const wordSearch = new WordSearch(letterGrid);

console.log(wordSearch.find(['java']));

// bug report: 9, 10 should be 9, 4