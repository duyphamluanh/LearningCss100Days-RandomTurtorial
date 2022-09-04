import utils from './utils'

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

// Objects
class Ball {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
// let objects
let ball1
let ball2
function init() {
 ball1 = new Ball(300,300,100,'black');
 ball2 = new Ball(undefined,undefined,30,'#FF7F6690');
}

// get distance
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  ball2.x = mouse.x;
  ball2.y = mouse.y;
  
  let distance = getDistance(ball1.x, ball1.y, ball2.x, ball2.y);
  if(distance < Math.abs(ball1.radius + ball2.radius)) {
    ball1.color = "red"
  } else {
    ball1.color = "black"
  }

  ball1.update();
  ball2.update();
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
}

init()
animate()
