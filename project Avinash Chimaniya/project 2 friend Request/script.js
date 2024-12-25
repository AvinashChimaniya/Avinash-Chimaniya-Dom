var btan = document.querySelector("button")
var btext = document.querySelector(".btt")
var rew = document.querySelector(".tetf")
var wow = document.querySelector(".chotu")
var fr = 0
let jadu = 0
btan.addEventListener("click",function(){
    if (fr == 0){
        btext.innerHTML = "CANCEL FRIEND"
        rew.innerHTML = "FREINDS"
        rew.style.color = `green`
        wow.style.color = "green"
        fr = 1
        
    }
    else{
        btext.innerHTML = "ADD FRIEND"
        rew.innerHTML = "STRANGER"
        rew.style.color = `blue`
        wow.style.color = "red"
        fr = 0
    }


})
