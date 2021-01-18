var countdownDate = new Date("Jan 1, 2022 12:00:00").getTime();

var interval = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countdownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

//link the innerHTML text of the clock from the autom update in JS
  if (timeleft < 0) {
    clearInterval(interval);
    document.getElementById("days").innerHTML = '';
    document.getElementById("hours").innerHTML = '';
    document.getElementById("minutes").innerHTML = '';
    document.getElementById("seconds").innerHTML = '';
  }
}, 1000);



