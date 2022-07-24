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

const messages = document.querySelector(".messages")
const message = messages.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    console.log(val)
    message.forEach((chat) => {
        let name = chat.querySelector("h5").textContent.toLowerCase()
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex"
        } else {
            chat.style.display = "none"
        }
    })
}

messageSearch.addEventListener("keyup", searchMessage)

// Theme/Display customization

const theme = document.querySelector(".menu-item")
const themeModal = document.querySelector(".customize-theme")
var root = document.querySelector(":root")
const colorPalette = document.querySelectorAll(".choose-color span")
const Bg1 = document.querySelector(".bg-1")
const Bg2 = document.querySelector(".bg-2")
const Bg3 = document.querySelector(".bg-3")

// open modal
const openThemeModal = () => {
    themeModal.style.display = "grid"
}

// close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none"
    }
}
themeModal.addEventListener("click", closeThemeModal)

theme.addEventListener("click", openThemeModal)

// Color

//remove
const changeActiveColorClass = () => {
    colorPalette.forEach((colorPicker) => {
        colorPicker.classList.remove("active")
    })
}
colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        let primary
        changeActiveColorClass()

        if (color.classList.contains("color-1")) {
            primaryHue = 252
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202
        }

        color.classList.add("active")

        root.style.setProperty("--primary-color-hue", primaryHue)
    })
})

// Background

let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness)
    root.style.setProperty("--white-color-lightness", whiteColorLightness)
    root.style.setProperty("--dark-color-lightness", darkColorLightness)
}

Bg1.addEventListener("click", () => {
    Bg1.classList.add("active")
    Bg2.classList.remove("active")
    Bg3.classList.remove("active")
    window.location.reload()
})

Bg2.addEventListener("click", () => {
    darkColorLightness = "95%"
    whiteColorLightness = "20%"
    lightColorLightness = "15%"

    Bg2.classList.add("active")
    Bg1.classList.remove("active")
    Bg3.classList.remove("active")
    changeBG()
})

Bg3.addEventListener("click", () => {
    darkColorLightness = "95%"
    whiteColorLightness = "10%"
    lightColorLightness = "0%"

    Bg3.classList.add("active")
    Bg1.classList.remove("active")
    Bg2.classList.remove("active")
    changeBG()
})
