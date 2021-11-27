// function shuffle(array) {
//     var m = array.length, t, i;

//     // While there remain elements to shuffle…
//     while (m) {

//       // Pick a remaining element…
//       i = Math.floor(Math.random() * m--);

//       // And swap it with the current element.
//       t = array[m];
//       array[m] = array[i];
//       array[i] = t;
//     }

//     return array;
//   }

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}