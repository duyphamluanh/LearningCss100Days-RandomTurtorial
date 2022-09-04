// Class circle
class Circle {
    constructor(context,x ,y, dx, dy ,radius, colors){
        this.context = context;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minradius= radius;
        this.maxradius = radius * 10;
        
        if(colors == undefined){
            this.fillStyle = 'black';
            this.strokeStyle = 'black';
        } else {
            this.fillStyle = colors[getRandomInt(0,colors.length - 1)];
            this.strokeStyle = colors[getRandomInt(0,colors.length - 1)];
        }
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fillStyle = this.fillStyle
        this.context.strokeStyle = this.strokeStyle
        this.context.lineWidth = 2
        this.context.fill();
        this.context.stroke();
    }

    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // mouse interacting
        if(mouse.x - this.x < this.maxradius && mouse.x - this.x > -this.maxradius 
        && mouse.y - this.y < this.maxradius && mouse.y - this.y > -this.maxradius ){
            this.radius *= 1.1;
            if(this.radius >= this.maxradius) {
                this.radius = this.maxradius;
            }
        } else {
            this.radius -= 1;
            if(this.radius <= this.minradius) {
                this.radius = this.minradius;
            }
        }
        this.draw();
    }
}
// WINDOW EVENTS
var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(e) {
    // console.log('mousemove',e)
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', function(e) {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
// RUN FUNTIONS
const num = 200;
const colors = ['#541690','#FF4949','#FF8D29','#FFCD38'];
var circleArray = [];
init();
run_animation(); // don't call me again or you'll see the FLASHHHHHHHHHHHH!!!
// FUNCTIONS
function init(){
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');
    circleArray = [];
    for (i = 0; i < num; i++) {
        var radius = getRandomArbitrary(4,10);
        // var radius = 5;
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius; // respawn at x position > radius
        var y = Math.random() * (innerHeight - radius * 2) + radius; // respawn at y position > radius
        var dx = plusOrMinus * (Math.random() + 0.5); // speed x
        var dy = plusOrMinus * (Math.random() + 0.5); // speed y

        circleArray.push(new Circle(ctx, x, y, dx, dy, radius, colors));
    }
}
// ---  RUN ANIMATIONS
function run_animation() {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    requestAnimationFrame(run_animation); // run function run_animation // Self-call again
    ctx.clearRect(0, 0, innerWidth, innerHeight); // clear canvas
    for (i = 0; i < num; i++) {
        circleArray[i].update();
    }
}
// Getting a random number between 0 (inclusive) and 1 (exclusive)
function getRandom() {
    return Math.random();
}
// Getting a random number between two values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Getting a random integer between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// Getting a random integer between two values, inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  
  
  