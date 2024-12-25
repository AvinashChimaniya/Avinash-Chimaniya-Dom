let bd = document.querySelector("body")
let hvr = document.querySelector(".hov")
let texti = document.querySelector(".txt")


bd.addEventListener("mousemove",function(dets){
   var a = dets.x
   var b = dets.y
hvr.style.left = `${a}` + `px`
hvr.style.top = `${b}` + `px`
  })

  texti.addEventListener("mouseenter",function(){
    hvr.style.height = 75 +`px`
    hvr.style.width = 75 + `px`
  })

  texti.addEventListener("mouseleave",function(){
    hvr.style.height = 50 +`px`
    hvr.style.width = 50 + `px`
  })


