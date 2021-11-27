console.clear();

const continents = [
  'africa',
  'antarctica',
  'asia',
  'Australia',
  'Europe',
  'north America',
  'south America',
];

const getContinents = (searchTerm: string): string[] => {
  // let results = [];
  const results = continents.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  return results;
};

console.log(getContinents('Europe')); // -> ['Europe']
console.log(getContinents('america')); // -> ['north America', 'south America']
console.log(getContinents('ica')); // -> ['africa', 'antarctica', 'north America', 'south America']

// document.getElementById('input').addEventListener('input', (x) => {
//   console.warn(x.target.value);

//   document.getElementById('output').innerText = ;
// });