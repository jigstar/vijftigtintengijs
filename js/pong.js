var ball = document.getElementById('ball')
var canvas = document.getElementById('canvas').getBoundingClientRect()
var rightPlayer = document.getElementById('RightPlayer')
var leftPlayer = document.getElementById('LeftPlayer')
var speedX = 0;
var speedY = 0;
var initspeedX = 5*Randone()
var accel = 1.05;
var millis = 1;
var delay = 0;
var scoreLeft = document.getElementById('scoreLeft');
var scoreRight = document.getElementById('scoreRight');

scoreLeft.style.top = canvas.height/5 - scoreLeft.getBoundingClientRect().height/2 + 'px'
scoreLeft.style.left = canvas.width/5 - scoreLeft.getBoundingClientRect().width/2 + 'px'
scoreRight.style.top = canvas.height/5 - scoreRight.getBoundingClientRect().height/2 + 'px'
scoreRight.style.left = 4*(canvas.width/5) - scoreRight.getBoundingClientRect().width/2 + 'px'

initialScoreL = 0
initialScoreR = 0
scoreLeft.innerHTML = initialScoreL
scoreRight.innerHTML = initialScoreR

clickToStart = document.getElementById('clickToStart')
clickToStart.style.top = canvas.height/5 - clickToStart.getBoundingClientRect().height/2 + 'px'
clickToStart.style.left = canvas.width/2 - clickToStart.getBoundingClientRect().width/2 + 'px'

ballX = canvas.width/2 - ball.getBoundingClientRect().width/2;
ballY = canvas.height/2 - ball.getBoundingClientRect().height/2;
ball.style.left = ballX + 'px'
ball.style.top = ballY + 'px'
leftPlayer.style.top = canvas.height/2 - leftPlayer.getBoundingClientRect().height/2 + 'px'

// random -1 or +1
function Randone() {
  // Generate either 0 or 1 randomly
  const randomZeroOrOne = Math.round(Math.random());

  // Convert 0 to -1, leave 1 as is
  const result = randomZeroOrOne === 0 ? -1 : 1;

  return result;
}

function moveBall(){
    clickToStart.innerHTML = ''
    id = setInterval(hitW, millis)
    function hitW() {
        //if ball hits left wall, respawn in the middle
        if(ball.getBoundingClientRect().left <= canvas.left && delay <= 0){
            delay = 10;
            ballX = canvas.width/2
            ballY = canvas.height/2
            ball.style.left = ballX + 'px'
            ball.style.top = ballY + 'px'
            speedX = initspeedX;
            speedY = 4*(2*Math.random()-1);
            initialScoreR += 1;
            initspeedX = 5*Randone();
        }
        if (ball.getBoundingClientRect().right >= canvas.right && delay <= 0){
            delay = 10;
            ballX = canvas.width/2
            ballY = canvas.height/2
            ball.style.left = ballX + 'px'
            ball.style.top = ballY + 'px'
            speedX = initspeedX;
            speedY = 4*(2*Math.random()-1);
            initialScoreL += 1;
            initspeedX = 5*Randone();
        }
        delay -= 1;
        scoreLeft.innerHTML = initialScoreL
        scoreRight.innerHTML = initialScoreR

    }
    if(speedX === 0 && speedY === 0){
        speedX = initspeedX;
        speedY = 4*(2*Math.random()-1);
        id = setInterval(move, millis);
        function move() {
            //if ball hits walls, bounce off wall
            if (ball.getBoundingClientRect().top < canvas.top || ball.getBoundingClientRect().bottom > canvas.bottom && delay <= 0) {
                delay = 10;
                speedY = -speedY
            }
            ballX += speedX;
            ballY += speedY;
            ball.style.left = ballX + 'px'
            ball.style.top = ballY + 'px'
            delay -= 1
        }
    }
}

document.addEventListener('click', () => moveBall());


//move right player with mouse keys, source: http://jsfiddle.net/infidel/JkQrR/1/ 
var pane = $('#canvas'),
box = $('#RightPlayer'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
x = 20;

function newh(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wh ? wh : n;
}

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > wv ? wv : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        top: function(i,v) { return newv(v, 38, 40); }
    });
    wh = pane.width() - box.width();
    wv = pane.height() - box.height();
}, 1);

//move left player with mouse keys, source: http://jsfiddle.net/infidel/JkQrR/1/ 
var pane2 = $('#canvas'),
box2 = $('#LeftPlayer'),
wh2 = pane2.width() - box2.width(),
wv2 = pane2.height() - box2.height(),
d2 = {},
x2 = 20;

function newh2(v2,a2,b2) {
    var n2 = parseInt2(v2, 10) - (d2[a2] ? x2 : 0) + (d2[b2] ? x2 : 0);
    return n2 < 0 ? 0 : n2 > wh2 ? wh2 : n2;
}

function newv2(v2,a2,b2) {
    var n2 = parseInt(v2, 10) - (d2[a2] ? x2 : 0) + (d2[b2] ? x2 : 0);
    return n2 < 0 ? 0 : n2 > wv2 ? wv2 : n2;
}

$(window).keydown(function(e) { d2[e.which] = true; });
$(window).keyup(function(e) { d2[e.which] = false; });

setInterval(function() {
    box2.css({
        top: function(i2,v2) { return newv2(v2, 87, 83); }
    });
    wh2 = pane2.width() - box2.width();
    wv2 = pane2.height() - box2.height();
}, 1);


//when ball hits a player, bounce back and go faster with 5%
function collide() {
    id = setInterval(colRight, millis);
    function colRight(){
    if(ball.getBoundingClientRect().right >= rightPlayer.getBoundingClientRect().left 
        && ball.getBoundingClientRect().bottom >= rightPlayer.getBoundingClientRect().top
        && ball.getBoundingClientRect().top <= rightPlayer.getBoundingClientRect().bottom  && delay <= 0
        || ball.getBoundingClientRect().left <= leftPlayer.getBoundingClientRect().right
        && ball.getBoundingClientRect().bottom >= leftPlayer.getBoundingClientRect().top
        && ball.getBoundingClientRect().top <= leftPlayer.getBoundingClientRect().bottom && delay <= 0) {
            delay = 10;
            speedX = -speedX*accel;
            speedY = Math.random()*4-2 //give random angle between [-2, 2] when collide
            ballY += speedY;  
        }
        ball.style.left = ballX + 'px'
        delay -= 1;
    }
}

collide()