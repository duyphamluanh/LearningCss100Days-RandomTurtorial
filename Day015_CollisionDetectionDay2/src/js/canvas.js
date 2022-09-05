import utils, {
  randomIntFromRange,
  randomIntFromRangeWithoutZero,
  rotate,
  resolveCollision
} from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FF7F66']

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

// Objects
class Ball {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.fill = this.color + '05';
    this.stroke = this.color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.fill
    c.strokeStyl = this.stroke
    // c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    this.draw()
  }
}


class Parcticle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color[randomIntFromRange(0,color.length - 1)]
    this.fill = this.color + '20';
    this.stroke = this.color
    this.mass = 1; // 1kg
    // this.speed = randomIntFromRange(1, 2);
    // this.velocity = {
    //   x: randomIntFromRangeWithoutZero(-this.speed, this.speed) *2,
    //   y: randomIntFromRangeWithoutZero(-this.speed, this.speed) *2
    // }
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5
    }
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.fill
    c.strokeStyle = this.stroke
    c.lineWidth = 1.6
    c.fill();
    c.stroke();
    c.closePath()
  }

  update() {
    // draw first calculate later or sometimes it collison resolve before it could be happen
    this.draw()

    for (let i = 0; i < parcticles.length; i ++){
      if(this == parcticles[i]) continue;
      if(getDistance(this.x, this.y, parcticles[i].x, parcticles[i].y) - this.radius*2 < 0) {
        resolveCollision(this, parcticles[i]);
      }
    }

    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x
    }

    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y
    }

    if(getDistance(mouse.x, mouse.y, this.x, this.y) < ball_mouse.radius){
      this.fill = this.color + '80';
    } else {
      this.fill = this.color + '20';
    }
    
    this.x += this.velocity.x;
    this.y += this.velocity.y
  }
}

// Implementation
// let objects
const parcticles_number = 100
let parcticles = [];
let radius = 20;
let ball_mouse;
function init() {
  ball_mouse = new Ball(undefined,undefined,150,'red');

  parcticles = [];
  let x = randomIntFromRange(radius, innerWidth - radius)
  let y = randomIntFromRange(radius, innerHeight - radius)
  parcticles.push( new Parcticle(x,y,radius,colors))
  let parcticlesnumber = parcticles_number
  // while(parcticles.length < parcticles_number) {
    for( let i = 0; i < parcticlesnumber - 1; i++) {
      let x = randomIntFromRange(radius, innerWidth - radius)
      let y = randomIntFromRange(radius, innerHeight - radius)
      let add = true;
  
      parcticles.forEach(parcticle => {
          if(getDistance(parcticle.x,parcticle.y,x,y) < radius + parcticle.radius) {
            add = false;
          }
        }
      );

      if (add == true) {
        parcticles.push( new Parcticle(x,y,radius,colors))
      } 
    }
    
    // parcticlesnumber = parcticles_number - parcticles.length;
    console.log(parcticles.length)
  // }
  
}

// get distance
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  ball_mouse.x = mouse.x;
  ball_mouse.y = mouse.y;
  ball_mouse.update();

  parcticles.forEach(parcticle =>
    parcticle.update()
  )
}

init()
animate()
