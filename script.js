var timer = 60;
var score = 0;
var hit;

function makeubble(){

    var clutter = "";

    for (var i = 1; i <= 160; i++) {
    var a = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${a}</div>`;
    }

document.querySelector("#pbtm").innerHTML = clutter



}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerid").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
        }
    }, 1000)
}

function hitMaker(){
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hit;
}

function scoreInc(){
    score += 10;
    document.querySelector("#scoreid").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hit) {
        makeubble();
        hitMaker();
        scoreInc();

    }
})


hitMaker();
runTimer();
makeubble();
