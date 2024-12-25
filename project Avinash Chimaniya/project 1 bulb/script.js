let btn = document.querySelector("button")
let lit = document.querySelector(".batti")
let lite = document.querySelector(".bulb")

let heady = document.querySelector(".binh")


var flag = 0
btn.addEventListener("click", function () {
   
    if (flag == 0) {
        lit.style.backgroundColor = 'yellow'
        lite.style.backgroundColor = `rgb(${121},${211},${4})`
        heady.innerHTML = "BULB IS TURNED ON"
        heady.style.color = `green`
        flag = 1
        
    }
    else{ 
        lit.style.backgroundColor = 'black'
        lite.style.backgroundColor = `gray`
        heady.innerHTML = "BULB IS TURNED OFF"
        heady.style.color = `red`
        flag = 0
        console.log(flag)
    } 
}
  
)


   




 

