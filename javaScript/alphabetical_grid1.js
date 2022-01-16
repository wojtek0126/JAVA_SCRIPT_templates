const codeA = 'a'.charCodeAt()

function grid(N) {
  if (N < 0) return null;
  const grid = [];
  for (let row = 0; row < N; row++) {
    const cells = [];
    for (let cell = 0; cell <N; cell++) {
      cells.push(String.fromCharCode(codeA + (row + cell) % 26));
    }
    grid.push(cells.join(' '))
  }
  return grid.join('\n')
}

// function grid(N) {
//   const s = "abcdefghijklmnopqrstuvwxyz"
//   return N < 0 ? null : Array.from({length: N}, (_, i) => Array.from({length: N}, (_, j) => s[(i + j) % 26]).join` `).join`\n`
// }