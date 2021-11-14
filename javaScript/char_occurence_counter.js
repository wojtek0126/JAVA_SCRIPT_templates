function validateWord(s, c = s.toLowerCase()) {
    return c.length % new Set(c).size == 0
}

// function validateWord(s) {
//     var freq = {}
//     s.toLowerCase().split('').forEach(function(s) {
//       freq[s] ? freq[s]++ : freq[s] = 1
//     })

//     return new Set(Object.values(freq)).size == 1
//   }

// const validateWord = $ => {
//     $ = [...$.toLowerCase()].reduce((acc, el)=>{
//       acc[el] = acc[el] + 1 || 1;
//       return acc
//     }, {})
//    return [...new Set(Object.values($))].length === 1
//   }

// function validateWord(s){
//     var counts = {};
//     for(var c of s.toLowerCase()){
//       if(counts[c] === undefined){counts[c] = 0;}
//       counts[c]++;
//     }
//     return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
//   }