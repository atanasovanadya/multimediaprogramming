var square = new Object();
var score = 0;
var timeleft;
var squares = new Array();
var gameon = false;

function drawSquare(){
    square.x=Math.floor(Math.random() * 500-22.5);
    square.y=Math.floor(Math.random() * 500-22.5);
         
    context.clearRect(0,0,500,500);
    context.fillStyle = "red"
         
    context.fillRect(square.x,square.y,40,40);
    squares.push(square);
    return square;
}


function onMouseDown(e){
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    
    if(!gameon){
        gameon = true;
        timeleft = 10;
        timer();
        score = 0;
        document.getElementById("score").textContent = score;
        document.getElementById("timer").textContent = "10";
        document.getElementById("message").textContent = "";
        drawSquare();

    }

    else if (collision(square.x, square.y, 40, 40, x, y)) {
        drawSquare();
        score++;
        document.getElementById("score").textContent = score;
    }
   

    
}

function collision(rectX,rectY,rectWidth,rectHeight,mouseX,mouseY){
    if(((rectX<=mouseX)&&
        (rectX+rectWidth>=mouseX))&&
        ((rectY<=mouseY)&&
        (rectY+rectHeight>=mouseY)))
        {
            return true;
        }
        else{
            return false;
        }
}

function timer(){
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        gameon = false;
        document.getElementById("message").textContent = " Your score is " + score;
        };
        
    },1000);
}


function init(){
    canvas=document.getElementById("canvas");
    context = canvas.getContext("2d");
    
    canvas.addEventListener('mousedown', onMouseDown, false);
    
}

window.addEventListener('load', init, false);
