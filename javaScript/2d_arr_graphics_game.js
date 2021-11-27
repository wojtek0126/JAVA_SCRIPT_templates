const level = [
    [1, 1, 0, 0, 2, 2, 0, 0, 1, 1],
    [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
    [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
    [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
    [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
    [1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
];


let str = "";

for (const subTab of level) {
    //pod subTab mamy każdą kolejną podtablicę

    for (const el of subTab) {
        switch (el) {
            case 0:
                str += "🟩";
                break;
            case 1:
                str += "🟫";
                break;
            case 2:
                str += "⬛";
                break;
        }
    }

    str += "\n";
}

console.log(str);