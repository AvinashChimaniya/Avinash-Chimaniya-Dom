let imggs = ['https://static.vecteezy.com/system/resources/thumbnails/024/249/135/small/caterpillar-isolated-on-a-transparent-background-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/021/193/007/non_2x/watercolor-single-ladybug-insect-animal-spring-season-illustration-element-png.png'
,
    'https://static.vecteezy.com/system/resources/thumbnails/024/704/542/small/dragonfly-with-ai-generated-free-png.png'
]
let body = document.querySelector("body")
let btun = document.querySelector("button")


btun.addEventListener("click", function () {
    let x = Math.random() * 96
    let y = Math.random() * 96
    let r = Math.random() * 360
    let sl = Math.floor(Math.random() * imggs.length)
    let im = imggs[sl]
    console.log(im)
    var imgg = document.createElement("img")
    a = imgg.getAttribute("src")
    body.appendChild(imgg)
    imgg.setAttribute('src',`${im}`)
    let tt = imgg.getAttribute("src")
    imgg.style.height = "70px"
    imgg.style.position = "absolute"
    imgg.style.left = x + "%"
    imgg.style.top = y + "%"
    imgg.style.transform = `rotate(${r}deg)`
})