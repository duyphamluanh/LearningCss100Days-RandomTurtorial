var text = document.getElementById('text');
var shadow = '';
var layers = 20;
for(let i = 0 ; i < layers; i++){
    shadow += (shadow ? ',' : '') + -i*1 + 'px ' + i*1 + 'px 0 #d9d9d9'; 
}
text.style.textShadow = shadow;
console.log(shadow);