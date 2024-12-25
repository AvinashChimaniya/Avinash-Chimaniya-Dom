let button = document.querySelector(".batan")
let limage = document.querySelector(".lim")
let rimage = document.querySelector(".rim")



button.addEventListener("click",function(){
    let lef = limage.getAttribute("src")
    let  ref = rimage.getAttribute("src")

    limage.setAttribute(`src`,ref)
    rimage.setAttribute(`src`,lef)
})