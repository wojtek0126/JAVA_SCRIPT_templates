const print = (element) => {
    console.log(element);
}

const wearMask = () => {
  console.log('you are proudly wearing mask');
}
const stay6FtApart = () => {
  console.log('stay away from me!!!');
}
const washHands = () => {
  console.log('wash wash wash');
}
const getTested = () => {
  still_alive = true;
  let result = Math.floor(Math.random() * 10);
  if(result <= 5) {
    console.log('yo still alive bro, keep going');
  }
  else {
    console.log('sorry, bro, positive :( ');
    still_alive = false;
  }
}
let still_alive = true;
while (still_alive === true) {
  wearMask();
  stay6FtApart();
  washHands();
  getTested();
}