/** @format */
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

let video = document.querySelectorAll(".video-list-container .list")

let videoList = document.querySelectorAll(".video-list-container .list")

videoList.forEach((vid) => {
    vid.onclick = () => {
        videoList.forEach((remove) => {
            remove.classList.remove("active")
        })
        vid.classList.add("active")
        let src = vid.querySelector(".list-video").src
        let title = vid.querySelector(".list-title").innerHTML
        document.querySelector(".main-video-container .main-video").src = src
        document.querySelector(
            ".main-video-container .main-vid-title"
        ).innerHTML = title
    }
})

const adMenu = document.querySelector(".dropdown-content")
const dropBtn = document.querySelector("#drop-btn")
const escBtn = document.querySelector("#button-close")

dropBtn.addEventListener("click", () => {
    adMenu.style.display = "block"
})
escBtn.addEventListener("click", () => {
    adMenu.style.display = "none"
})

const adMenu2 = document.querySelector(".dropbot-content")
const dropBtn2 = document.querySelector("#dropbot")
const escBtn2 = document.querySelector("#bot-close")

dropBtn2.addEventListener("click", () => {
    adMenu2.style.display = "block"
})
escBtn2.addEventListener("click", () => {
    adMenu2.style.display = "none"
})
