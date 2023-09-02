var canvas = document.querySelector('canvas');
// make canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'lightgray';
var ball = canvas.getContext('2d');

var x = 50;
var y = 50;

var spring = 0.03;

var friction = 0.9;

var mouse = {
    x: 0,
    y: 0
};

var targetX = 500;
var targetY = 500;

var vy = 0;
var vx = 0;



function animate(){
    requestAnimationFrame(animate);
    ball.clearRect(0,0,innerWidth,innerHeight);

    
    var dx = mouse.x - x;
    var dy = mouse.y - y;
    var ax = dx * spring;
    var dy = dy * spring;
    var gravity = 2;
    vx += ax;
    vy += dy;
    vy += gravity;
    vx *= friction;
    vy *= friction;
    x += vx;
    y += vy;


    ball.beginPath();
    ball.arc(x,y,50,0,Math.PI*2,false);
    ball.fillStyle = 'black';
    ball.fill();

    ball.beginPath();
    ball.moveTo(x,y);
    ball.lineTo(mouse.x,mouse.y);
    ball.strokeStyle = 'black';
    ball.stroke();

    

}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

animate();