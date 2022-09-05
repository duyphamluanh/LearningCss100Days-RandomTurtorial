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
let objects
function init() {

}

// Animation Loop
let rect1
let rect2
let rect2x
let rect2y
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillStyle = "#1a1a23"
  c.fillRect(0, 0, canvas.width, canvas.height)
  
  const staticRectangleX = canvas.width/2 - 50;
  const staticRectangleY = canvas.height/2 - 50;
  let touched = false;
  rect2x = mouse.x - 50;
  rect2y = mouse.y - 50;

  if(mouse.x - 50 + 100 > staticRectangleX        &&
     mouse.x - 50       < staticRectangleX + 100  &&
     mouse.y - 50 + 100 > staticRectangleY        &&
     mouse.y - 50       < staticRectangleY + 100
     ) {
    console.log('touched');
    touched = true;
  }
  
  c.fillStyle = 'green';
  c.fillRect(canvas.width/2 - 50 +1, 0, 2, canvas.height);
  c.fillRect(canvas.width/2 + 50 -1, 0, 2, canvas.height);
  c.fillRect(canvas.width/2 - 1, 0, 2, canvas.height);
  c.fillRect(0, canvas.height/2 - 50 +1, canvas.width, 2);
  c.fillRect(0, canvas.height/2 + 50 -1, canvas.width, 2);
  c.fillRect(0, canvas.height/2 - 1, canvas.width, 2);

  c.fillStyle = '#f00'
  
  rect1 = c.fillRect(staticRectangleX, staticRectangleY, 100, 100)
  
  c.fillStyle = '#00ffdd90'
  rect2 = c.fillRect(rect2x, rect2y, 100, 100)

  if(touched) {
    c.fillStyle = 'white';
    c.font = "bold 16px san-serif";
    c.fillText('Touched', 50, 50, 250)
  }
}

// init()
animate()
