// global constants
const clueHoldTime = 2; //1000; //how long to hold each clue's light/sound
const cluePauseTime = 1; //333; //how long to pause in between clues
const nextClueWaitTime = 2; //1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
// var countDownDate = new Date().getTime();
let pattern = [];
// let count;

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 463.5,
  6: 474,
  7: 376.8,
  8: 399,
  9: 485.5,
  10: 499.2,
  11: 569.7,
  12: 600
};

function getPattern() {
  pattern = Array.from(Array(20)).map(x => Math.floor(Math.random() * 12) + 1)
  console.log(pattern);
}

// function countDown() {
//   var now = 
//   document.getElementById("demo").innerHTML = count;
// }

function startGame() {
  //call the get pattern function to get random pattern at each round
  getPattern();
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // document.getElementsByClassName("game_button").innerHTML = "";
  document.querySelectorAll('.body .game_buttons .game_button').innerText = ""; //to correct

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame() {
  gamePlaying = false;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    
    // count = Math.floor(((countDownDate - delay) % (1000 * 60)) / 1000);
    // window.setInterval(countDown, count + 5);
  }
}

function winGame() {
  stopGame();
  alert("Game Over. Congratulations, You won!");
}
function loseGame() {
  stopGame();
  alert("Game Over. Sorry, You lost.");
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    document.getElementById("button" + btn).innerHTML = "&#x2714;";
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    document.getElementById("button" + btn).innerHTML = "&#10006;";
    loseGame();
  }
}

