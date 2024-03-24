const refreshRate = 15000;

setInterval(function () {
  window.location.reload();
}, refreshRate);

function showTime() {
  const time = new Date();

  const myMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];

  var mm = time.getMonth();
  var dd = time.getDate();
  var yy = time.getFullYear();
  var day = time.getDay();
  var hh = time.getHours();
  var min = time.getMinutes();
  var s = time.getSeconds();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let month = myMonth[mm];
  let myweekday = weekday[day];

  let actualTime =
    myweekday +
    " " +
    month +
    ", " +
    dd +
    " " +
    yy +
    " " +
    hh +
    ":" +
    min +
    ":" +
    s;

  document.getElementById("DigitalClock").innerText = actualTime;
}

showTime();


