const iplTeams = [
    {
      teamName: "Mumbai Indians",
      image: "https://www.timesofsports.com/wp-content/uploads/2021/12/Mumbai-Indians-logo.png"
    },
    {
      teamName: "Chennai Super Kings",
      image: "https://www.timesofsports.com/wp-content/uploads/2021/12/CSK-Logo.png"
    },
    {
      teamName: "Royal Challengers Bangalore",
      image: "https://www.timesofsports.com/wp-content/uploads/2021/12/Royal-Challengers-Bangalore-Logo.png"
    },
    {
      teamName: "Delhi Capitals",
      image: "https://www.timesofsports.com/wp-content/uploads/2021/12/Delhi-Capitals-Logo.png"
    },
    {
      teamName: "Kolkata Knight Riders",
      image: "https://www.timesofsports.com/wp-content/uploads/2021/12/KKR-Logo.png"
    },
    {
      teamName: "Punjab Kings",
      image: "https://timesofsports.com/wp-content/uploads/2021/12/Punjab-Kings.png"
    },
    {
      teamName: "Rajasthan Royals",
      image: "https://www.timesofsports.com/wp-content/uploads/2021/12/Rajasthan-Royals-Logo-1024x576.jpg"
    },
    {
      teamName: "Sunrisers Hyderabad",
      image: "https://www.timesofsports.com/wp-content/uploads/2022/01/SRH-team-logo.png"
    },
    {
      teamName: "Lucknow Super Giants",
      image: "https://www.timesofsports.com/wp-content/uploads/2022/01/Lucnow-Supergiants-IPL-Logo.png"
    },
    {
      teamName: "Gujarat Titans",
      image: "https://www.timesofsports.com/wp-content/uploads/2022/02/Gujarat-Titans-Logo.png"
    }
  ];
  
  let button = document.querySelector(".bttn")
  let win = document.querySelector(".winh")
  let wimage = document.querySelector(".wimage")

  button.addEventListener("click",function(){
    let a = Math.floor(Math.random()*iplTeams.length)
    let g = iplTeams[a].image
    let h = iplTeams[a].teamName
    wimage.style.backgroundImage = `url(${g})`
    win.innerHTML = `THE WINNER IS ${h}`
    
  })