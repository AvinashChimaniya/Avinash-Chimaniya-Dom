const users = [
    {
        profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "ryan",
        storyPhoto: "https://images.unsplash.com/photo-1684061578510-80d12e70d1ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'minachi',
        storyPhoto: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "ayan",
        storyPhoto: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "jeany",
        storyPhoto: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "kobalt",
        storyPhoto: "https://images.unsplash.com/photo-1680539593018-1bab59cafc8f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "manu",
        storyPhoto: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
let sum = ""
let hum = ""
users.forEach(function (elem, idx) {
    var b = elem.name
    sum = sum + `<div class="osm">
                <div class="story">
                    <img id ="${idx}" src="${elem.profilePhoto}"
                        alt="">
                </div>
                <h3>${b}</h3>
            </div>`
})

let ddd = document.querySelector(".rectangle")
ddd.innerHTML = sum

// let ari = [1, 2, 4, 5, 32, 342, 4]
users.forEach(function (elem,) {
    var a = elem.name

    hum = hum + ` <div class="psid">
                <div class="psprofile"><img 
                        src="${elem.profilePhoto}"alt=""></div>
                <div class="psloca">
                    <h3>${a}</h3>
                    <h4>location</h4>
                </div>
            </div>
            <div class="poost">
                <div class="iim"><img 
                        src="${elem.storyPhoto}"
                        alt=""></div>
                <div class="likes">
                    <div class="lott"><i class="ri-heart-3-line"></i>
                        <i class="ri-chat-3-line"></i>
                        <i class="ri-send-plane-line"></i>
                    </div>
                    <div><i class="ri-bookmark-line"></i></div>   
                </div>
            </div>`
})


let data = document.querySelector(".posts")
data.innerHTML = hum

let fon = document.querySelector(".fnt")
let sref = document.querySelector(".info")
let iimg = document.querySelector(".ccory")
let scory = document.querySelector(".rectangle")
let line = document.querySelector(".inner")

scory.addEventListener("click", function (elem) {
    var lla = users[elem.target.id].storyPhoto
    var lila = users[elem.target.id].profilePhoto
    var lilaa = users[elem.target.id].name
    

    iimg.style.display = `block`
    iimg.style.backgroundImage = `url(${lla})`

    sref.innerHTML = `<div class="psprofile"><img
                    src="${lila}"
                    alt=""></div>
                <div class="psloca">
                <h3 class ="fnt">${lilaa}</h3>
                <h4>location</h4>`
    



    setTimeout(function(){
        iimg.style.display = "none"
        clearInterval(a)
    },3000)

    let num = 0

   let a =  setInterval(function(){
        num = num+1
        line.style.width = num + "%"
    },30)
  

})

