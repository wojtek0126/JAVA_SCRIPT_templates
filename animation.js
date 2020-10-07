const print = (element) => {
    return console.log(element);
}

print('tet');

let paintbox = document.getElementById('paintbox');

let context = paintbox.getContext('2d');

let gameOn = true;

let plyerSpeed = 5;
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
        this.speed = 0;
        // this.moving = false;
    }
    move() {
        // if(this.moving) {
        this.x += this.speed;
        // }
    }
}
//enemy inherits x and y from player
class Enemy extends Box {
    constructor(speed) {
        super(50,'red');
        this.speed = speed;
    }
    move() {    //this bounces objects off canvas walls
        this.y += this.speed;
        if (this.y + this.size > 500) {  //500 is canvas siza here
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
function isCollided(box1, box2) {

}

function drawbox(box) {
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.size, box.size);
}

paintbox.addEventListener('mousedown', () => {
    print(plyerSpeed, ' player speed');
    player.speed = 5;
})

paintbox.addEventListener('mouseup', () => {
    player.speed = 0;
})

setInterval(() => {
    plyerSpeed = 5 + parseInt(Math.random() * 10);
    player.y = 100 + (Math.random() * 300);
}, 2000);

function gameloop() {
    if (!gameOn) return


    print('update frame');
    context.clearRect(0, 0, 500, 500);  //this is relative to canvas size
    e1.move();  //this adds move
    e2.move();
    player.move();

    if (isCollided(e1, player) || isCollided(e2, player) ) {
        window.alert('game over');
    }
    drawbox(player); //this just draws static
    drawbox(e1);
    drawbox(e2);
    window.requestAnimationFrame(gameloop);
}
// below instead of interval
// function updateGame() {
//     window.requestAnimationFrame(() => {
//
//         updateGame();
//     })
// }

gameloop();



// setInterval(() => {
//
// }, 100);

//drawbox(e1) to show it by now