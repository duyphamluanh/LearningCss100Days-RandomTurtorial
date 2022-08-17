const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log(e.clientX, e.target.offsetLeft, e.clientY);
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        const rippleAnimation = document.createElement('span');
        rippleAnimation.style.left = x + 'px';
        rippleAnimation.style.top = y + 'px';

        this.appendChild(rippleAnimation);
        setTimeout(function(){
            rippleAnimation.remove();
        },2000);
    })
});