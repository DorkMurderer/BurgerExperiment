
const btnEl1 = document.getElementById("btn1")
const btnEl2 = document.getElementById("btn2")
const btnEl3 = document.getElementById("btn3")



btnEl1.addEventListener("click", function(audioName){
    playSound("honk2.mp3")
})

btnEl2.addEventListener("click", function(audioName){
    playSound("cuica.mp3")

})

btnEl3.addEventListener("click", function(audioName){
    playSound("toro_foot_steps.mp3")
})




function playSound(audioName){
    let audio = new Audio(audioName)
     audio.loop = false 
     audio.play()
}


// drawing section!
