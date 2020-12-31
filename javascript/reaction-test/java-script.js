var start = new Date().getTime() ;
var timeArray = [];
var reactionTime;
var avrageClickTime;
var dupa = 1;
var max_dupa = 2;
var shape = document.getElementById("shape").style;
var timeInfos = document.getElementById("timeInfos").style;
var endScreen = document.getElementById("endScreen").style;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function makeShapeAppear() {
    shape.display = "block";
    start = new Date().getTime();
    var top = Math.random() * 800;
    var left = Math.random() * 1800;
    var width = (Math.random() * 100) + 40;
    var radius = Math.round(Math.random()) * 100;
    shape.top = top + "px";
    shape.left = left + "px";
    shape.width = width + "px";
    shape.height = width + "px";
    shape.borderRadius  = radius + "%";
    shape.backgroundColor  = getRandomColor();
}
function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random()*2000);
}

function avrage() {                      
    var sum = timeArray.reduce(function(a, b){
    return a + b;
    }, 0);
    avrageClickTime = (sum / timeArray.length).toFixed(2);
}
function gameCoreCore(){
    shape.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start)  / 1000;
    timeArray.push(timeTaken);
    document.getElementById("secondsTaken").innerHTML = timeTaken + " s";
    avrage();
    reactionTime = timeArray.slice(-1)[0];
    document.getElementById("timeSummary").innerHTML = document.getElementById("timeSummary").innerHTML + "<p>" + "HIT no. " + timeArray.length + ": " + reactionTime +"</p>";
    document.getElementById("sumAvrage").innerHTML = avrageClickTime;
}
function gameCore(){

    if (dupa < max_dupa) {
        gameCoreCore();
        appearAfterDelay();
        dupa++;
    } else {
        gameCoreCore();
        endScreen.display = "block";
        document.getElementById("sumAvrageEnd").innerHTML = avrageClickTime;
    }
    
    
}

document.getElementById("shape").onclick = gameCore;
timeInfos.display = "none";
endScreen.display = "none";
document.getElementById("startButton").onclick = function () {
    document.getElementById("initalScreen").style.display = "none";
    timeInfos.display = "block";
    appearAfterDelay();
    
}