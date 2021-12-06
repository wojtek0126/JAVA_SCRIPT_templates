// const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

function iceBrickVolume(radius, bottleLength, rimLength) {
var brickLength = bottleLength - rimLength;
var brickDepth = radius*2;
var brickHeight = radius; 

return brickLength * brickDepth * brickHeight;

}

//bottle length - rim length will give you the height of the brick = (brick height x width x depth)
//radius x 2 = width of the brick
//

//the bottle volume = volume = r squared x height x pi = 31.4
//radius = 1
//bottlelength = 10
//rimlength = 2 

//the brick volume = 16
//brick length = 8
//brick depth = 1 x 2 (double the radius)
//brick height = 1

//brick volume = 1150
//brick length = 23
//brick depth = 5 x 2 (double the radius)
//brick height = 5 