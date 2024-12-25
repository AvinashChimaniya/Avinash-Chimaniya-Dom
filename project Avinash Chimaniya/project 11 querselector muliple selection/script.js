let btns = document.querySelectorAll("button")
let body = document.querySelector("body")
btns.forEach(function(elem){
    elem.addEventListener("click",function(){
console.log(elem.innerHTML)
body.style.backgroundColor = `${elem.innerHTML}`
    })
})
