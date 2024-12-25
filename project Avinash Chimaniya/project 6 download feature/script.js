let button = document.querySelector("button")
let fill = document.querySelector(".inp")
let details = document.querySelector(".dwndetail")

num = 0

button.addEventListener("click", function () {

    
    
    var aa = setInterval(function(){
        num = num +  1
        fill.style.width = num + "%"
        fill.style.backgroundColor = "green"
        details.innerHTML = `your file downloaded in ${num} ms`
        button.style.pointerEvents = `none`
        console.log(num)
    },10)
    
    setTimeout(function(){
        clearInterval(aa)
        
    },1000)
})