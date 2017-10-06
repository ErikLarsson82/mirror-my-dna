const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

setInterval(gameLoop, 1000/60)

function render() {
    context.fillStyle="#cccccc"
    context.fillRect(0, 0, 2000, 100)
    lemonRythm.map(item => {
        context.fillStyle="#000000"
        context.fillRect(item / 5, 0, 1, 20)
    })

    pressed.map(item => {
        context.fillStyle="#0000ff"
        context.fillRect(item / 5, 20, 1, 20)
    })
    context.fillStyle="#ff0000"
    context.fillRect(counter / 5, 10, 1, 20)
}

const lemonRythm = [1745,1840,1903,1983,2065,2085,2127,2148,2167,2208,2228,2268,2308,2348,2385,2405,2487,2526,2547,2628,2710,2789,2889,2911,2929,2949,2968,2988,3011,3051,3253,3274,3334,3355,3415,3437,3515,3546,3548,3550,3552,3554,3556,3559,3561,3563,3565,3567,3569,3571,3573,3575,3577,3579,3581,3583,3585,3587,3589,3592,3594,3596,3598,3600,3602,3604,3606,3608,3610,3612,3614,3616,3618,3620,3622,3625,3627,3629,3631,3633,3635,3637,3639,3641,3643,3645,3647,3649,3651,3653,3673,3837,3878,3917,3956,3999,4038,4077,4117,4158,4279,4287,4322,4419,4441,4459,4480,4522,4562,4601,4642,4701,4722,4803,4863,4883,4946,4967,5005,5045,5065,5086,5105,5124,5186,5224,5266,5284,5347,5367,5468,5548,5627,5649,5668,5710,5731,5751,5770]
const pressed = []

var music_ambient = new Audio('lewl.mp3')
music_ambient.play()

//music_ambient.volume = 0.3
/*music_ambient.addEventListener('ended', function() {
    this.currentTime = 0
    this.play();
}, false);*/

var counter = 0

function gameLoop() {
    counter++
    /*if(counter % 60 === 0) {
        console.log("output",counter    )
    }*/
    if (lemonRythm.indexOf(counter) !== -1) {
        console.log('bam', Math.random())
    }

    render()
}

//render()

window.addEventListener("keydown",keyListener)

function keyListener(e) {
    if(e.keyCode===32) {
        //lemonRythm.push(counter)
        //console.log("32 pressed",counter % 60,rateMe(counter % 60))
        pressed.push(counter)
    }
}

function rateMe(timing) {
    if((timing>55 && timing<=59) || (timing>=0 && timing<=3)) {
        return true
    }
    return false
}

//