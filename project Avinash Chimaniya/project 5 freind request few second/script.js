var btan = document.querySelector("button")
var btext = document.querySelector(".btt")
var rew = document.querySelector(".tetf")
var wow = document.querySelector(".chotu")
var fr = 0
let jadu = 0
btan.addEventListener("click",function(){
    if (fr == 0){
        btext.innerHTML = "REQUESTED"
        rew.innerHTML = "sending request"
        rew.style.color = `yellow`
        wow.style.color = "yellow"
        fr = 1
        setTimeout(function(){
            btext.innerHTML = "UNFRIEND"
            rew.innerHTML = "FRIENDS"
            rew.style.color = `green`
            wow.style.color = "green"
            fr = 1
        },5000)
        
    }
    else{
        btext.innerHTML = "ADD FRIEND"
        rew.innerHTML = "STRANGER"
        rew.style.color = `blue`
        wow.style.color = "red"
        fr = 0
    }


})
