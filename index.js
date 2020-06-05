let durationInput = document.querySelector("#durationInput");
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let stopButton = document.querySelector("#stopButton");

class Timer {
  constructor(durationInput, playButton, pauseButton) {
    this.durationInput = durationInput;
    this.playButton = playButton;
    this.pauseButton = pauseButton;
    this.stopButton = stopButton;
    playButton.addEventListener("click", () => {
      this.start();
    });
    pauseButton.addEventListener("click", () => {
      this.pause();
    });
    stopButton.addEventListener("click", () => {
      this.stop();
    });
  }
  start() {
    let duration = this.durationInput.value;

    if (parseInt(duration) > 0) {
      this.playButton.style.display = "none";
      this.stopButton.style.display = "initial";
      durationInput.disabled = true;
      let intervalID = setInterval(function () {
        duration = duration - 1;
        if (duration === -1) {
          clearInterval(intervalID);
          alert("Reached 0...");
          this.playButton.style.display = "initial";
          this.stopButton.style.display = "none";
          this.durationInput.disabled = false;
        } else {
          this.durationInput.value = duration;
        }
      }, 1000);
      this.intervalID = intervalID;
    } else {
      alert("Please enter a Valid Number.");
    }
  }
  pause() {
    clearInterval(this.intervalID);
    this.playButton.style.display = "initial";
    this.stopButton.style.display = "none";
    this.durationInput.disabled = false;
  }
  stop() {
    this.durationInput.value = "0";
    clearInterval(this.intervalID);
    this.playButton.style.display = "initial";
    this.stopButton.style.display = "none";
    this.durationInput.disabled = false;
  }
  changeDuration() {
    console.log("changeDuration");
  }
  tick() {
    console.log("tick");
  }
}
let timer1 = new Timer(durationInput, playButton, pauseButton, stopButton);
