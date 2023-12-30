let i = 1; // for initial call
function digitalClock() {
  // references
  let hoursDiv = document.querySelector(".clockBody .hours");
  let minutesDiv = document.querySelector(".clockBody .minutes");
  let secondsDiv = document.querySelector(".clockBody .seconds");


  let Time = new Date();
  let mainHour = Time.getHours();
  let hh = mainHour % 12 == 0 ? 12: mainHour % 12;
  let mm = Time.getMinutes();
  let ss = Time.getSeconds();
  
 let hours = hh < 10 ?  `0${hh}` : hh ;
 let minutes = mm < 10 ? `0${mm}` : mm;
 let seconds = ss < 10 ?  `0${ss}` : ss ;
 
  secondsDiv.innerHTML = seconds;
  if (seconds == 0) {
    minutesDiv.innerHTML = minutes;
  }
  if (seconds == 0 && minutes == 0) {
    hoursDiv.innerHTML = hours;
  }




  if (i == 1) {
    minutesDiv.innerHTML = minutes;
    hoursDiv.innerHTML = hours;
    i = 2;
  } // for initial call call

};
digitalClock();
setInterval(digitalClock, 1000);