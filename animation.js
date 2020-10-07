const print = (element) => {
    return console.log(element);
}

print('tet');

let paintbox = document.getElementById('paintbox');

let context = paintbox.getContext('2d');
// context.moveTo();
// context.lineTo();
// context.stroke();

// fillRect
//clearRect
//fillStyle = "red"
// context.fillRect(50, 50, 100, 100);
// context.fillStyle = "red";
// context.rect(100, 100 , 30, 30);
// context.stroke();

class Box {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }
}

class Player extends Box {
    constructor() {
        super(50,'blue');
        this.x = 0;
        this.y = 0;
    }
}
//enemy inherits x and y from player
class Enemy extends Box {
    constructor(speed) {
        super(50,'red');
        this.speed = speed;
    }
    move() {
        this.y += this.speed;
        if (this.y + this.size > 500) {
            this.speed = -(Math.abs(this.speed));
        }
        if (this.y < 0) {
            this.speed = (Math.abs(this.speed));
        }
    }
}
//create new player and enemies after setting speed they appear and move
let player = new Player();
let e1 = new Enemy(1);
let e2 = new Enemy(2);
e1.x = 120;
e2.x = 240;
//drawbox creates player or enemy etc they are visible when speed is determined
function drawbox(box) {
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.size, box.size);
}


// below instead of interval
function updateGame() {
    window.requestAnimationFrame(() => {
        print('update frame');
        context.clearRect(0, 0, 500, 500);
        e1.move();
        e2.move();
        drawbox(e1);
        drawbox(e2);
        updateGame();
    })
}

updateGame();
