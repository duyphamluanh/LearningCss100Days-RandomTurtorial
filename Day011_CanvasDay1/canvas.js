var canvas = document.querySelector('canvas');
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
// ctx.fillStyle = 'red';
// ctx.fillRect(100, 100, 100, 100);
// // const ctx2 = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(300, 130, 100, 100);
// // const ctx3 = canvas.getContext('2d');s
// ctx.fillStyle = 'blue';
// ctx.fillRect(500, 180, 100, 100);

// line
// ctx.beginPath();
// ctx.strokeStyle = 'white';
// ctx.lineWidth = 1;
// ctx.moveTo(150, 150);
// ctx.lineTo(350, 180);
// ctx.lineTo(550, 230);
// ctx.stroke();

// circle
// ctx.beginPath();
// ctx.arc(300,300,30,0, Math.PI * 2,false);
// ctx.strokeStyle = 'red';
// ctx.stroke();

// const color_red = 1;
// const color_blue = 2;
// const color_green = 3;
// begins = 0;
// times = 50;
// for(begins; begins <= times; begins++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
    
//     ctx.beginPath();
//     // let color = Math.floor(x%4);
//     // switch(color){
//     //     case color_red:
//     //         ctx.strokeStyle = 'red';
//     //         break;
//     //     case color_blue:
//     //         ctx.strokeStyle = 'blue';
//     //         break;
//     //     case color_green:
//     //         ctx.strokeStyle = 'green';
//     //         break;
//     //     default:
//     //         ctx.strokeStyle = 'whitesmoke';
//     // }
//     ctx.strokeStyle = "rgba(" + 
//                         Math.random() * 255 + "," + // Randomly generated brightness for color red 
//                         Math.random() * 255 + "," + // Randomly generated brightness for color green 
//                         Math.random() * 255 + "," + // Randomly generated brightness for color blue
//                         Math.random() + // Randomly generated transparency for alpha
//                     ")";             
//     ctx.arc(x, y, 30, 0, Math.PI * 4, false);
//     ctx.stroke();
// }

function Circle(x,y,radius,dx,dy) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.dx = dx;
    this.dy = dy;
    this.fillStyle = "rgba(" + 
        Math.random() * 255 + "," + // Randomly generated brightness for color red 
        Math.random() * 255 + "," + // Randomly generated brightness for color green 
        Math.random() * 255 + "," + // Randomly generated brightness for color blue
        Math.random() + // Randomly generated transparency for alpha
    ")";    
    this.strokeStyle = "rgba(" + 
        Math.random() * 255 + "," + // Randomly generated brightness for color red 
        Math.random() * 255 + "," + // Randomly generated brightness for color green 
        Math.random() * 255 + "," + // Randomly generated brightness for color blue
        Math.random() + // Randomly generated transparency for alpha
    ")";    

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2,false);
        ctx.fillStyle= this.fillStyle   
        ctx.strokeStyle = this.strokeStyle   
        ctx.lineWidth=2
        ctx.fill();
        // ctx.stroke();
    }

    this.update = function() {
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,radius,0, Math.PI * 2,false);
        // ctx.fill();
        // ctx.stroke();
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy= -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}



var num = 1000;
var circleArray = []
for(i = 0; i < num; i ++){
    let radius = Math.round(Math.random()*5);
    let x = Math.random() * (innerWidth - radius*2) + radius; // respawn at x position > radius
    let y = Math.random() * (innerHeight - radius*2) + radius; // respawn at y position > radius
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    let dx = plusOrMinus*(Math.random() + 0.5) * 2; // speed x
    let dy = plusOrMinus*(Math.random() + 0.5) * 2; // speed y
    let circle = new Circle(x,y,radius,dx,dy);
    // circle.draw();
    circleArray.push(circle);
}

function run_animation() {
    requestAnimationFrame(run_animation); // run function run_animation // Self-call again

    ctx.clearRect(0,0,innerWidth, innerHeight); // clear canvas
    for(i = 0; i < num; i ++){
        circleArray[i].update();
    }
    // console.log(x,y,dx,dy);
}
run_animation();

// document.querySelector("canvas").addEventListener("wheel", changespeed);
// function changespeed(e) {
//     let plus = 0;
//     if (e.wheelDelta >= 0) {
//         // console.log('Scroll up:' + e.wheelDelta); //your scroll data here
//         plus = 1 ;
//     }
//     else {
//         // console.log('Scroll down:' + e.wheelDelta); //your scroll data here
//         plus = -1 ;
//     }
//     speed = Math.abs(dx);
//     if(dx >= 0 && speed < 10) {
//         dx += plus;
//     } 
//     if(dx <= 0 && speed > 0)  {
//         dx -= plus;
//     }
//     console.log('speed:'+dx);
// } 