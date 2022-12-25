    //select the canvas elements
let c   = document.getElementById('my-canvas'),
    //select context type
    ctx = c.getContext('2d');

//choose fill style
ctx.fillStyle = '#333'; //color, gradient, pattern

//draw rectangle
ctx.fillRect(0,0,c.width,c.height);
