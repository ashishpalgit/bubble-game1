var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn  = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){  
    var clutter = "";
    for(var i=1 ; i<=66; i++) {
        let random = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">
        ${random}</div>`;
    }

    document.querySelector("#panelBottom").innerHTML = clutter;
 
}

function runTimer(){
    var time  = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;}
        else {
            clearInterval(timer);
            document.querySelector("#panelBottom").innerHTML = `<h1 class = "center">Game Over<h1>`;
        }
    }, 1000)
    console.log(time);
}

document.querySelector("#panelBottom").addEventListener("click" , function(dets){
    let val = Number(dets.target.textContent);
    if(hitrn === val) {
        increaseScore();
        makeBubble();
        getNewHit();
    }

});

makeBubble();
runTimer();
getNewHit();
// increaseScore();