function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play(); 
} 

function stopAudio() {
    var audio = document.getElementById("myAudio");
    audio.pause(); 
}



function setVolume(val){
    var audio = document.getElementById("myAudio");
    audio.volume = val / 100;
}
