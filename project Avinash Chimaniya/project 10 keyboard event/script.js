let football = document.querySelector(".container")
let body = document.querySelector("body")

let movex = 0
let movey = 0

body.addEventListener('keypress',function(dets){
let kpair = dets.key
if( kpair == `a`){
    movex = movex+1
    football.style.left = movex + "%"
    football.style.transform = `rotate(${movex*20}deg)`
    console.log(dets)
}

if( kpair == `s` ){
    movex = movex-1
    football.style.left = movex + "%"
    football.style.transform = `rotate(${movex*20}deg)`
    console.log(movex)
}

if( kpair == `d`  ){
    movey = movey+1
    football.style.top = movey + "%"
    football.style.transform = `rotate(${movey*20}deg)`
    console.log(movey)
}

if( kpair == `f` ){
    movey = movey-1
    football.style.top = movey + "%"
    football.style.transform = `rotate(${movey*20}deg)`
    console.log(movey)
}



})