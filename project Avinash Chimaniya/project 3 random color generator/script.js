


let buttonr = document.querySelector(".rb")
let divv = document.querySelector(".rup")
let col = 0


buttonr.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    if (col == 0) {
        divv.style.backgroundColor = `rgb(${a},${b},${c})`
        col = 1
    }
    else {
        divv.style.backgroundColor = `rgb(${b},${a},${c})`
        col = 0
    }

})





let d = 0
let buttonl = document.querySelector(".lb")
let dibb = document.querySelector(".lup")

buttonl.addEventListener("click", function () {
    let i = Math.floor(Math.random() * 100)
    let j = Math.floor(Math.random() * 100)
    if (d == 0) {
        dibb.style.width = i + "%"
        dibb.style.height = j + "%"
        d = 1
    }
    else{
        dibb.style.width = i + "%"
        dibb.style.height = j + "%"
        d = 0
    }
})


