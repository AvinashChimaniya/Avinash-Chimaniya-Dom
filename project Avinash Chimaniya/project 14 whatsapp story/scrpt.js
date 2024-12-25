const whatsappStatuses = [
    {
      id: 1,
      username: "John Doe",
      statusText: "Having a great day at the beach!",
      statusImage: "https://www.w3schools.com/w3images/beach.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar2.png",
      timestamp: "2024-12-24T12:30:00Z"
    },
    {
      id: 2,
      username: "Jane Smith",
      statusText: "Busy with work, but happy.",
      statusImage: "https://www.w3schools.com/w3images/work.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar3.png",
      timestamp: "2024-12-24T13:00:00Z"
    },
    {
      id: 3,
      username: "Carlos Medina",
      statusText: "Enjoying the sunset with friends.",
      statusImage: "https://www.w3schools.com/w3images/sunset.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar4.png",
      timestamp: "2024-12-24T14:15:00Z"
    },
    {
      id: 4,
      username: "Emma White",
      statusText: "Coffee time! ☕️",
      statusImage: "https://www.w3schools.com/w3images/coffee.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar5.png",
      timestamp: "2024-12-24T16:00:00Z"
    },
    {
      id: 5,
      username: "Luke Green",
      statusText: "Work hard, dream big!",
      statusImage: "https://www.w3schools.com/w3images/workhard.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar4.png",
      timestamp: "2024-12-24T17:00:00Z"
    },
    {
      id: 6,
      username: "Mia Clarke",
      statusText: "Chilling with family at the park.",
      statusImage: "https://www.w3schools.com/w3images/family.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar1.png",
      timestamp: "2024-12-24T18:30:00Z"
    },
    {
      id: 7,
      username: "David Lee",
      statusText: "A beautiful morning walk in the city!",
      statusImage: "https://www.w3schools.com/w3images/city.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar3.png",
      timestamp: "2024-12-24T19:00:00Z"
    },
    {
      id: 8,
      username: "Olivia Turner",
      statusText: "Baking some delicious cookies 🍪.",
      statusImage: "https://www.w3schools.com/w3images/baking.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar2.png",
      timestamp: "2024-12-24T20:30:00Z"
    },
    {
      id: 9,
      username: "Samuel Rivera",
      statusText: "Hiking up the mountains!",
      statusImage: "https://www.w3schools.com/w3images/mountains.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar4.png",
      timestamp: "2024-12-24T21:00:00Z"
    },
    {
      id: 10,
      username: "Sophia Allen",
      statusText: "Traveling the world, one step at a time!",
      statusImage: "https://www.w3schools.com/w3images/travel.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar1.png",
      timestamp: "2024-12-24T22:00:00Z"
    },
    {
      id: 11,
      username: "Ethan Harris",
      statusText: "Had a great workout session at the gym!",
      statusImage: "https://www.w3schools.com/w3images/gym.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar2.png",
      timestamp: "2024-12-24T23:00:00Z"
    },
    {
      id: 12,
      username: "Charlotte Moore",
      statusText: "Caught up with some old friends today. So much fun!",
      statusImage: "https://www.w3schools.com/w3images/friends.jpg",
      profileImage: "https://www.w3schools.com/w3images/avatar3.png",
      timestamp: "2024-12-24T23:30:00Z"
    }
  ];

var hum =""
let mbody = document.querySelector(".wnew")
whatsappStatuses.forEach(function(elem,idz){
    hum = hum + ` <div class="wid">
                <div class="wsas"><img id="${idz}" src="${elem.profileImage}" alt="" srcset=""></div>
                <div class="wsast">
                    <h3>${elem.username}</h3>
                    <h4>${elem.timestamp}</h4>
                </div>
            </div>`
})

mbody.innerHTML = hum


let overlay = document.querySelector(".sati")
let stat = document.querySelector(".wnew")
stat.addEventListener("click",function(dets){
let aa = whatsappStatuses[dets.target.id].statusImage
 
overlay.style.display = `block`
overlay.style.backgroundImage = `url(${aa})`


setTimeout(function(){
overlay.style.display = `none`
clearInterval(tt)
},3000)

var cnn = 0
let inn =document.querySelector(".cl")

var tt = setInterval(function(){
    cnn = cnn + 1
    inn.style.width = cnn + "%"
},30)




})