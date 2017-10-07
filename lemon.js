const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
context.font = "8px Arial"
setInterval(gameLoop, 1000/60)

function render() {
    context.fillStyle="#cccccc"
    context.fillRect(0, 0, 2000, 100)
    cargoRythm.map(item => {
        context.fillStyle="#000000"
        context.fillRect(item / 5, 0, 1, 20)
    })

    pressed.map(item => {
        context.fillStyle="#0000ff"
        context.fillRect(item / 5, 20, 1, 20)
    })
    context.fillStyle="#ff0000"
    context.fillRect(counter / 5, 10, 1, 20)

    context.fillStyle="#000000"
    context.fillText("Mirror My DNA pre-alpha 0.1",10,90);

}

const lemonRythm = [1745,1840,1903,1983,2065,2085,2127,2148,2167,2208,2228,2268,2308,2348,2385,2405,2487,2526,2547,2628,2710,2789,2889,2911,2929,2949,2968,2988,3011,3051,3253,3274,3334,3355,3415,3437,3515,3546,3548,3550,3552,3554,3556,3559,3561,3563,3565,3567,3569,3571,3573,3575,3577,3579,3581,3583,3585,3587,3589,3592,3594,3596,3598,3600,3602,3604,3606,3608,3610,3612,3614,3616,3618,3620,3622,3625,3627,3629,3631,3633,3635,3637,3639,3641,3643,3645,3647,3649,3651,3653,3673,3837,3878,3917,3956,3999,4038,4077,4117,4158,4279,4287,4322,4419,4441,4459,4480,4522,4562,4601,4642,4701,4722,4803,4863,4883,4946,4967,5005,5045,5065,5086,5105,5124,5186,5224,5266,5284,5347,5367,5468,5548,5627,5649,5668,5710,5731,5751,5770]
const cargoRythm = [1034,1085,1108,1132,1180,1227,1277,1302,1326,1377,1393,1415,1428,1450,1473,1489,1508,1520,1542,1570,1589,1607,1619,1666,1686,1714,1763,1781,1802,1814,1862,1882,1900,1911,1960,1976,1996,2008,2058,2069,2081,2091,2102,2152,2198,2244,2293,2312,2317,2351,2395,2406,2411,2428,2440,2488,2514,2538,2563,2588,2609,2638,2650,2657,2687,2733,2779,2796,2802,2817,2828,2879,2927,2977,2992,2998,3013,3026,3073,3120,3172,3178,3197,3223,3247,3270,3293,3316,3340,3364,3388,3414,3453,3463,3485,3507,3516,3528,3539,3554,3581,3605,3647,3654,3681,3708,3731,3753,3777,3801,3836,3847,3858,3888,3899,3938,3948,3974,3998,4020,4045,4068,4091,4098,4116,4122,4134,4145,4181,4190,4237,4283,4311,4322,4335,4384,4434,4456,4469,4481,4506,4531,4579,4627,4651,4662,4673,4697,4723,4732,4753,4760,4776,4801,4820,4845,4865,4878]
const pressed = []

var music_ambient = new Audio('bad_religion.mp3')
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
    /*if (lemonRythm.indexOf(counter) !== -1) {
        console.log('bam', Math.random())
    }*/
    //cargoRythm

    render()
}

//render()

window.addEventListener("keydown",keyListener)

function keyListener(e) {
    if(e.keyCode===32) {
        //cargoRythm.push(counter)
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