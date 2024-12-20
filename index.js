let audio = document.getElementById('audio')
let pop = document.getElementById('pop')

let msg1 = document.getElementById('msg1')
let txt1 = document.getElementById('txt1')

let msg2 = document.getElementById('msg2')
let txt2 = document.getElementById('txt2')


function message1(){
  msg2.style.display = "flex"
  txt2.innerText = "Hi...."
  playm()
}
setTimeout(message1, 5000)

function message2(){
  msg1.style.display = "flex"
  txt1.innerText = "Hi...."
  playm()

}
setTimeout(message2, 7000)

function message3(){
  msg2.style.display = "flex"
  txt2.innerText = "What are you Doing...."
  playm()

}
setTimeout(message3, 9000)

function message4(){
  msg1.style.display = "flex"
  txt1.innerText = "Nothing...."
  playm()

}
setTimeout(message4, 11000)

function message5(){
  msg2.style.display = "flex"
  txt2.innerText = "Ok...."
  playm()

}
setTimeout(message5, 13000)

function message6(){
  msg2.style.display = "flex"
  txt2.innerText = "I am sending you a link just click on It...."
  playm()

}
setTimeout(message6, 15000)

function message7(){
  msg1.style.display = "flex"
  txt1.innerText = "Ok...."
  playm()

}
setTimeout(message7, 17000)

function message8(){
  msg1.style.display = "flex"
  txt1.innerText = "But Which link...."
  playm()

}
setTimeout(message8, 19000)

function message9(){
  msg2.style.display = "flex"
  txt2.innerText = "Before click on the link you must wear your head phone because some surprice are playing there...."
  msg2.style.top = "12rem"
  playm()

}
setTimeout(message9, 22000)



function message10(){
  msg2.style.display = "flex"
  txt2.innerHTML = `<a href="memories.html"><p>www.love💘.com </p></a>`
  msg2.style.cursor = "pointer"
  playm()

}
setTimeout(message10, 28000)

// music play

function playMusic(){
  audio.play()
.then(()=>{
  console.log("Audio played success fully")
})
.catch((e) =>{
  console.log("Error", e)
})
}

playMusic()

setInterval(playMusic, 1000)

// -----------------------------------

// play function

function playm(){
pop.play()
.then(()=>{
  console.log("pop success fully")
})
.catch((e)=> console.log("Error",e))
}




