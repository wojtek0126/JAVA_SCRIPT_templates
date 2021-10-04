//plug it to html with element that has id canvas
// it creates text that drops from above and nicely appears. source: https://www.javascripture.com/

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var fontHeight = 16;

// Center of the text (vertically)
var centerY = fontHeight / 2;
context.textBaseline = 'middle';

// Set the font properties
context.font = fontHeight + 'px sans-serif';

// Linear Interpolation
var lerp = function(from, to, t) {
    return (to - from) * t + from;
};

// Create a simple list of keyframe
var keyframes = [
    // Slide the text down
    {
        time: 500,
        /* ms */
        applyKeyframe: function(context, t) {
            // Animate the opacity and position
            context.globalAlpha = t;
            context.translate(0, lerp(-(centerY + fontHeight), 0, Math.sin(t * Math.PI / 2)));
        }
    },

    // Delay
    { time: 1500 }, /* ms */

    // Slide the text down
    {
        time: 350,
        /* ms */
        applyKeyframe: function(context, t) {
            context.globalAlpha = (1 - t);
            context.translate(0, lerp(0, centerY + fontHeight, Math.sin(t * Math.PI / 2)));
        }
    },

    // Stay hidden
    {
        time: 350,
        /* ms */
        applyKeyframe: function(context, t) {
            context.globalAlpha = 0;
        }
    },
];

// Get the total length of the animation
var totalTime = keyframes.reduce(function(t, keyframe) {
    return t + keyframe.time;
}, 0);

// Create a function that draws one frame of the animation
var drawFrame = function(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    var string = strings[((time / totalTime) | 0) % strings.length];

    time = time % totalTime;

    var keyframe;
    for (var i = 0; i < keyframes.length; i++) {
        keyframe = keyframes[i];
        if (time < keyframe.time) {
            break;
        }
        time -= keyframe.time
    }

    // Save the context's state (transforms, colors, etc)
    context.save();

    if (keyframe.applyKeyframe) {
        keyframe.applyKeyframe(context, time / keyframe.time);
    }

    context.fillText(string, 0, centerY);

    // Restore the state
    context.restore();

    // Register our callback for the next frame
    requestAnimationFrame(drawFrame);
};

requestAnimationFrame(drawFrame);