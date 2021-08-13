let interval;

function setAlarm() { 
  
  let alarmSet = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let body = document.querySelector("body");

  
  clearInterval(interval); 
  pauseAlarm(); 

  
  interval = setInterval(()=>{ 
    if(alarmSet===0){ 
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      body.style.background = "gray"; 
      playAlarm(); 
      clearInterval(interval); 
    }else if(alarmSet>10){
      timeRemaining.innerText = "Time Remaining: 00:" + alarmSet;
      alarmSet --;
    }else if(alarmSet>9){
      alarmSet = 9;
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      alarmSet --;
    }else{
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      alarmSet --;
    };
  },1000); 
};

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
