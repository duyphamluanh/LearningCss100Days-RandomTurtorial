import utils, { randomColor, randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', 'blue', 'purple']

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
class Particles {
  constructor(x, y, radius, color, radiant) {
    this.xo = x
    this.yo = y
    this.distancefromcenter = randomIntFromRange(50,120);
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians =  Math.random() * Math.PI*2;
    this.velocity = 0.1;
    this.lastmouse = {
      x: x,
      y: y
    }
  }

  draw(lastpoint) {
    c.beginPath()
    // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    // c.fillStyle = this.color
    // c.fill()
    c.lineWidth = this.radius;
    c.strokeStyle = this.color;
    c.moveTo(lastpoint.x, lastpoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath()
  }

  update() {
    const lastpoint = {
      x: this.x,
      y: this.y
    }
    // Move points over time 
    this.radians +=  this.velocity;

    // Drag effects
    this.lastmouse.x += (mouse.x - this.lastmouse.x) * 0.05; 
    this.lastmouse.y += (mouse.y - this.lastmouse.y) * 0.05; 
    // Circular motions
    this.x = this.lastmouse.x + Math.cos(this.radians) * this.distancefromcenter;
    this.y =  this.lastmouse.y + Math.sin(this.radians) * this.distancefromcenter;
    this.draw(lastpoint)
  }
}

// Implementation
let particles
function init() {
  particles = []

  for (let i = 0; i < 500; i++) {
    // objects.push()
    const radius = Math.random() * 5 + 1
    particles.push(new Particles(canvas.width /2, canvas.height /2 , radius , randomColor(colors)));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(255,255,255,0.1)';
  c.fillRect(0, 0, canvas.width, canvas.height)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach(particle => {
    particle.update()
  })
}

init()
animate()