const tab = [
    1, [2, 3],
    [4, 5, [6, 7]],
    [
        [
            [8, 9],
            [10, 11]
        ]
    ]
]

console.log(tab.flat(1));

// tablice flat 1 poziom

const tab = [
    1, [2, 3],
    [4, 5, [6, 7]],
    [
        [
            [8, 9],
            [10, 11]
        ]
    ]
]

console.log(tab.flat(2));

// tablice flat 2 poziom

// Jeżeli chcemy mieć pewność, że uzyskamy płaską 1 wymiarową tablicę, jako liczbę poziomów podajmy Infinity:

const tab = [
    1, [2, 3],
    [4, 5, [6, 7]],
    [
        [
            [8, 9],
            [10, 11]
        ]
    ]
]

console.log(tab.flat(Infinity)); //[1,2,3,4,5,6,7,8,9,10,11]