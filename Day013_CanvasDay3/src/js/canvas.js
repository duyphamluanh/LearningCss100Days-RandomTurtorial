import utils, { randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
  
  init()
})

addEventListener('click', () => {
  init();
})

// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.default_dx = dx;
    this.dx = dx;
    this.default_dy = dy;
    this.dy = dy;
    this.radius = radius;
    this.fill = color[randomIntFromRange(0,color.length - 1)]
    this.stroke = color[randomIntFromRange(0,color.length - 1)]
    this.gravity = 1;
    this.frictionY = 0.888;
    this.frictionX = 0.99;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.fill;
    c.strokeStyle = this.stroke;
    c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    if (this.y + this.radius + this.dy> innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy * this.frictionY;
    } else {
      this.dy += this.gravity;
    }
    if (this.x + this.radius + this.dx> innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }  

    if(this.frictionY != 0 && this.frictionX != 0){
      this.x += this.dx;
      this.y += this.dy;
      if(Math.round(this.y) > innerHeight - this.radius) {
        if(this.frictionY != 0){
          this.frictionY = 0;
        } 
      }
    } else if(this.frictionY == 0 && this.frictionX != 0) {
      this.dx = this.dx * this.frictionX;
      this.x += this.dx;
      console.log(this.dx);
      if(Math.abs(this.dx) < 0.000001){
        console.log(this.dx);
        this.frictionX = 0;
      }
    } else {
      console.log('animation stopped')
    }
    this.draw();
  }
}

// Implementation
let objects = []
let ball
function init() {
  // ball = new Ball(canvas.width/2, canvas.height/2, 30, 'red')
  // ball.draw();
  objects = [];
  for(var i = 0; i < 1000; i ++){
    var radius = randomIntFromRange(8, 50);
    var x = randomIntFromRange(radius*2, canvas.width - 50*2);
    var y = randomIntFromRange(radius, canvas.height - 50*2);
    var dx = randomIntFromRange(-10,10);
    var dy = randomIntFromRange(1,2);
    ball = new Ball(x, y, dx, dy, radius, colors)
    objects.push(ball);
  }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    objects.forEach(function(ball){
      ball.update();
    })
    c.fillStyle = 'red';
    c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
}

init()
animate()
