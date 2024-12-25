let body = document.querySelector("body")
let button = document.querySelector("button")
let va = 0
let saved = localStorage.getItem(`class`)
if(saved){
    body.setAttribute(`class`,saved)
}

button.addEventListener("click", function () {
if(va == 0){
    localStorage.setItem(`class`, `dark`)
        let bba = localStorage.getItem(`class`)
        body.setAttribute(`class`, `${bba}`)
        va = 1
}
        
else {
    localStorage.setItem(`class`, `light`)
        let vva = localStorage.getItem(`class`)
        body.setAttribute(`class`, `${vva}`)
        va = 0

}
    
 
})



