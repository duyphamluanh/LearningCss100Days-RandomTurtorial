document.addEventListener("DOMContentLoaded", function(event) { 
    var container = document.querySelector('.container');
    var btns = document.querySelector('.bubbles');
    var n = parseInt(container.offsetWidth/90);
    console.log(n);
    
    var i = 0;
    while(i < n){
        var rippleAnimation = document.createElement('span');
        var x = math.randomInt(15,30)*math.randomInt(15,30)/math.randomInt(15,30); // So fucking random
        rippleAnimation.style.width = x + 'px'; // set bubble width
        rippleAnimation.style.height = x  + 'px'; // set bubble height
        var minspeed = 3;
        rippleAnimation.style.setProperty('--i',Math.abs(Math.floor(30 - x)) + minspeed); // set bubble speed - the smaller the faster (minspeed = 5)
        btns.appendChild(rippleAnimation);
        i++;
    }
});