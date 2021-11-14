function isVow(a) {
    // a97 e101  i105 o111 u117
    const arr = a
    arr.forEach(function(item, i) {
        if (item == 97) a[i] = "a";
        if (item == 101) a[i] = "e";
        if (item == 105) a[i] = "i";
        if (item == 111) a[i] = "o";
        if (item == 117) a[i] = "u";
    });
    return arr
}

// function isVow(a){
//     for (var i=0, l=a.length; i<l; ++i)
//     {
//       var char = String.fromCharCode(a[i])
//       if ('aeiou'.indexOf(char) !== -1)
//       a[i] = char;
//     }

//     return a;
//   }

// function isVow(a){
//     return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
//   }