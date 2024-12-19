//Any where in the scrine

let lists = document.querySelectorAll('.container');
let value = 0;
let music = document.getElementById('music')
let alertBox = document.getElementById('alert')
let btn = document.getElementById('btn')


let messageInterval = setInterval(()=>{
  alertBox.style.display = "flex"
  alertBox.style.zIndex = (value = value +1);
  
},30000)

btn.addEventListener('click', ()=>{
  clearInterval(messageInterval)
  alertBox.style.display = "none"

})


for (let list of lists){
  
  dragElement(list)

function dragElement(el){
el.addEventListener('mousedown', mouseDown)
   function mouseDown(e){
    
    e.preventDefault();
    el.style.color = "black"
    el.style.zIndex = (value = value +1);
    
    
    // el.addEventListener('mousemove', mouseMove)
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)

    alertBox.style.display = "none"

    music.play()
    .then(()=> console.log("Music Played success fully"))
    .catch((e) => console.log("Error occured" , e))

   
    
   }

   function mouseMove(e){
    e.preventDefault()
    el.style.left = e.clientX + 'px'
    el.style.top = e.clientY + 'px'
    // e.style.zIndex = "1";

   }

   function mouseUp () {
    el.style.color = ' #8F00FF'
    // el.style.zIndex = "1";

    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
   }
}

   


}