/** @format */

var feild = document.querySelector("textarea")
var backUp = feild.getAttribute("placeholder")
var btn = document.querySelector(".btn")
var clear = document.getElementById(".cle")

feild.onfocus = function () {
    this.setAttribute("placeholder", "")
    this.style.borderColor = "#333"
    btn.style.display = "block"
}

feild.onblur = function () {
    this.setAttribute("placeholder", backUp)
    this.style.borderColor = "#aaa"
}

clear = function () {
    btn.style.display = "none"
    feild.value = ""
}
