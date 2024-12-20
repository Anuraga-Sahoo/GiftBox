let music1 = document.getElementById("myAudio");
let birthDaySong = document.getElementById('myBirthDayAudio')
let music2 = document.getElementById("music");
let pop = document.getElementById('pop')



let giftBox = document.getElementById('box')
let messageBox = document.getElementById('message')
let btn = document.getElementById('btn-c')
// let musicBtn = document.getElementById('music-play-paush')
let txtMsg = document.getElementById('download')
let alertBox = document.getElementById('alert')

let btnClick = 0



// ----------------flex message----------
setTimeout(()=>{
   alertBox.style.display = "flex"
   playm()
},8000)


// --------Birthday song play automatically ------
function playMusic() {
  birthDaySong.play()
    .then(() => console.log("Music is playing!"))
    .catch((error) => {
      console.error("Error playing music:", error);
    });
}

// Automatically play music when the page loads
let myMusicInterval  = setInterval(playMusic, 1000)

// ----------------👉----------

giftBox.addEventListener('click',function handleClick() {
  playm()
  messageBox.style.display = "flex"
  alertBox.style.display = "none"

  btnClick = btnClick+1
  console.log(btnClick)
   // Disable further clicks
   giftBox.removeEventListener("click", handleClick);
   giftBox.style.cursor = "not-allowed"; // Change cursor to indicate it's disabled
}
)
// -------------Play music function--------------

  btn.addEventListener("click", () => {
  playm()

  if( btnClick == 1 ){

    messageBox.style.display = "none"
    giftBox.src = "./surprise.png"  
  
    if (!music1) {
      console.error("Audio element with ID 'myAudio' not found!");
      return;
    }
    
    // Play music after a second delay
    const timeout = setTimeout(playMusic, 1000);
  
    function playMusic() {
      clearInterval(myMusicInterval)
      birthDaySong.pause()
      music1
        .play()
        .then(() => {
          music1.setAttribute("controls","")
          music2.setAttribute("controls", "")
          txtMsg.innerText = "If you want to download that music then click on 3 dots"
            //  musicBtn.style.display = "block"
            //  let flag = true
            //   musicBtn.addEventListener("click", ()=>{
            //     if(flag){
            //     music1.pause()
            //     musicBtn.src = "./play.png"
            //     flag = false
            //     }
            //     else{
                  
            //         music1.play()
            //         musicBtn.src = "./pause-button.png"
            //         flag = true
                   
            //      } 
            //   })
            
          console.log("Audio playback started successfully.");
        })
        .catch((error) => {
          console.error("Error during audio playback:", error);
        });
    }
  }
  })

  

  // if(music1.play()){
  //   musicBtn.addEventListener("click", ()=>{
  //   music1.pause()
  //   musicBtn.src = "./play.png"
  //   console.log("object")
  // })
  // }
  // else{
    // musicBtn.addEventListener("click", ()=>{
    // music1.play()
    // musicBtn.src = "./pause-button.png"
    // })
  // }

  function playm(){
    pop.play()
    .then(()=>{
      console.log("pop success fully")
    })
    .catch((e)=> console.log("Error",e))
    }

    

