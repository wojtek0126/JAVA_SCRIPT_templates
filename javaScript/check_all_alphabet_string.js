function isPangram(string) {
    //...!/[^a-zA-Z]/
    return [...
        "abcdefghijklmnopqrstuvwxyz"
    ].every(x => string.toLowerCase().includes(x));
}

// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
//   }

// function isPangram(str) {
//     letters: for (var c = 0; c < 26; c++) {
//       for (var i = 0; i < str.length; i++) {
//         var s = str.charCodeAt(i)
//         if (s < 65 || s > 90 && s < 97 || s > 122) continue
//         if (s === 65 + c || s === 97 + c) continue letters
//       }

//       return false
//     }

//     return true
//   }