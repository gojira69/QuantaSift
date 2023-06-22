function countdown() {
  var now = new Date();
  var eventDate = new Date("June 30, 2023 00:00:00");
  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTime;

  var seconds = Math.floor(remTime / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  if (remTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  } else {
    document.getElementById("days").innerHTML = days + " " + ":";
    document.getElementById("hours").innerHTML = hours + " " + ":";
    document.getElementById("minutes").innerHTML = minutes + " " + ":";
    document.getElementById("seconds").innerHTML = seconds;
  }
}

var countdownInterval = setInterval(countdown, 1000);
