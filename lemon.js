setInterval(gameLoop, 1000/60)
var counter = 0

function gameLoop() {
    n ++
    if(counter % 60 === 0) {
        console.log("output",counter    )
    }
    

}

window.addEventListener("keydown",keyListener)

function keyListener(e) {
    if(e.keyCode===32) {
        console.log("32 pressed",counter % 60,rateMe(counter % 60))

    }
}

function rateMe(timing) {
    if((timing>55 && timing<=59) || (timing>=0 && timing<=3)) {
        return true
    }
    return false
}
