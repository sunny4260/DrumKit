// Detected by buttonpress 
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var clickButton = this.innerHTML;

    makeSound(clickButton);
    animationButton(clickButton);
  });
}

// Detected by keybordpress :
document.addEventListener("keypress", function(e) {
  makeSound(e.key);
  animationButton(e.key);
});


function makeSound(key){
  switch (key) {
    case "w":
      var myAudio = new Audio("./sounds/tom-1.mp3");
      myAudio.play();
      break;

    case "a":
      var myAudio = new Audio("./sounds/tom-2.mp3");
      myAudio.play();
      break;

    case "s":
      var myAudio = new Audio("./sounds/snare.mp3");
      myAudio.play();
      break;

    case "d":
      var myAudio = new Audio("./sounds/tom-3.mp3");
      myAudio.play();
      break;

    case "j":
      var myAudio = new Audio("./sounds/tom-4.mp3");
      myAudio.play();
      break;

    case "k":
      var myAudio = new Audio("./sounds/kick-bass.mp3");
      myAudio.play();
      break;

    case "l":
      var myAudio = new Audio("./sounds/crash.mp3");
      myAudio.play();
      break;

    default:
      console.log(key);
  }
};

function animationButton(currentButton){

  var activeButton = document.querySelector("." + currentButton);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },150);
}
