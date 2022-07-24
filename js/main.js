/** @format */

var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues,
            },
        ],
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        },
    },
})

const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block"
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none"
})
sideMenu.addEventListener("click", () => {
    sideMenu.querySelector(".product-count").style.display = "none"
})

// Orders RUBIKS

Orders.forEach((order) => {
    const tr = document.createElement("tr")
    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentCash}</td>
                            <td class="${
                                order.shipping === "Cancelled"
                                    ? "danger"
                                    : order.shipping === "Pending"
                                    ? "warning"
                                    : "success"
                            }">${order.shipping}</td>
                            <td class="primary">Details</td>
    `
    tr.innerHTML = trContent
    document.querySelector("table tbody").appendChild(tr)
})

//	Simple example of using private variables
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x = obj.time();
//
//	To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in milliseconds
//
//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();
//
var clsStopwatch = function () {
    // Private vars
    var startAt = 0 // Time of last start / resume. (0 if not running)
    var lapTime = 0 // Time on the clock when last stopped in milliseconds

    var now = function () {
        return new Date().getTime()
    }

    // Public methods
    // Start or resume
    this.start = function () {
        startAt = startAt ? startAt : now()
    }

    // Stop or pause
    this.stop = function () {
        // If running, update elapsed time otherwise keep it
        lapTime = startAt ? lapTime + now() - startAt : lapTime
        startAt = 0 // Paused
    }

    // Reset
    this.reset = function () {
        lapTime = startAt = 0
    }

    // Duration
    this.time = function () {
        return lapTime + (startAt ? now() - startAt : 0)
    }
}

var x = new clsStopwatch()
var $time
var clocktimer
let current = document.getElementById("heading")

function pad(num, size) {
    var s = "0000" + num
    return s.substr(s.length - size)
}

function formatTime(time) {
    var h = (m = s = ms = 0)
    var newTime = ""

    h = Math.floor(time / (60 * 60 * 1000))
    time = time % (60 * 60 * 1000)
    m = Math.floor(time / (60 * 1000))
    time = time % (60 * 1000)
    s = Math.floor(time / 1000)
    ms = time % 1000

    newTime = pad(h, 2) + ":" + pad(m, 2) + ":" + pad(s, 2) + ":" + pad(ms, 3)
    return newTime
}

function show() {
    $time = document.getElementById("time")
    update()
}

function update() {
    $time.innerHTML = formatTime(x.time())
}

function start() {
    clocktimer = setInterval("update()", 1)
    x.start()
    playAudio()
}

function stop() {
    x.stop()
    update()
    clearInterval(clocktimer)
    let oras = document.getElementById("time").innerHTML
    current.innerHTML = oras
    let time = document.getElementById("timer")
    let list = document.createElement("p")
    let clockz = document.getElementById("time").innerHTML
    list.innerHTML = clockz
    time.appendChild(list)

    let allTimeEntries = JSON.parse(localStorage.getItem("allTimeEntries"))

    if (allTimeEntries == null) allTimeEntries = []

    let data = {
        timeId: allTimeEntries.length,
        timeData: clockz,
    }

    allTimeEntries.push(data)
    localStorage.setItem("allTimeEntries", JSON.stringify(allTimeEntries))
    let history = ""
    for (let x in allTimeEntries) {
        history += `<p> ${allTimeEntries[x].timeData}</p>`
    }
    time.innerHTML = history
}

let time = document.getElementById("timer")

let allTimeEntries = JSON.parse(localStorage.getItem("allTimeEntries"))

let history = ""
for (let x in allTimeEntries) {
    history += `<p> ${allTimeEntries[x].timeData}</p>`
}
time.innerHTML = history
for (let x in allTimeEntries) {
    if (x == allTimeEntries.length - 1) {
        document.getElementById("heading").innerHTML =
            allTimeEntries[x].timeData
    }
}
function reset() {
    // stop()
    x.reset()
    update()
}

// Clear History

function burado() {
    document.getElementById("timer").innerHTML = ""
    localStorage.removeItem("allTimeEntries")
}

// Play Audio
var y = document.getElementById("myAudio")

function playAudio() {
    y.play()
}

function pauseAudio() {
    y.pause()
}
// Keypress Script
var pressed = true

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        if (pressed) {
            setTimeout(start, 2000)
            pressed = false
        } else {
            stop()
            pressed = true
        }
    }
    if (e.keyCode == 82) {
        reset()
    }
}

// Accounts
