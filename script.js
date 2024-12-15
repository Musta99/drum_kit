var numberOfLetter = document.querySelectorAll(".letter").length;

for (var i = 0; i < numberOfLetter; i++) {
  document
    .querySelectorAll(".letter")
    [i].addEventListener("click", function () {
      console.log(this.textContent.toLowerCase());
      playSound(this.textContent);
      addRemoveAnimation(this.textContent.toLowerCase());
    });
}

document.addEventListener("keypress", function (event) {
  console.log(event);
  playSound(event.key.toUpperCase());
  addRemoveAnimation(event.key);
});

function playSound(buttonKey) {
  if (buttonKey === "E") {
    var crash = new Audio("sounds/crash_e.wav");
    crash.play();
  } else if (buttonKey === "R") {
    var ride = new Audio("sounds/ride_r.wav");
    ride.play();
  } else if (buttonKey === "F") {
    var tom_low = new Audio("sounds/tom-low_f.wav");
    tom_low.play();
  } else if (buttonKey === "G") {
    var tom_mid = new Audio("sounds/tom-mid_g.wav");
    tom_mid.play();
  } else if (buttonKey === "H") {
    var tom_high = new Audio("sounds/tom-high_h.wav");
    tom_high.play();
  } else if (buttonKey === "V") {
    var kick = new Audio("sounds/kick_v_b.wav");
    kick.play();
  } else if (buttonKey === "B") {
    var kick = new Audio("sounds/kick_v_b.wav");
    kick.play();
  } else if (buttonKey === "J") {
    var snare = new Audio("sounds/snare_j.wav");
    snare.play();
  } else if (buttonKey === "I") {
    var hihat_open = new Audio("sounds/hihat-open_i.wav");
    hihat_open.play();
  } else if (buttonKey === "K") {
    var hihat_close = new Audio("sounds/hihat-close_j.wav");
    hihat_close.play();
  }
}

function addRemoveAnimation(currentButton) {
  var selectButton = document.querySelector("." + currentButton);
  console.log(selectButton);
  selectButton.classList.add("tapped");
  setTimeout(function () {
    selectButton.classList.remove("tapped");
  }, 500);
}
