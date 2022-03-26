var timeBlock = document.querySelector(".time-block");
var currentDateEl = document.querySelector("#lead");
var timerAndDateEl = moment().format("LLLL");

var currentDate = function () {
  //   onload(window).then(timerAndDateEl);
  //   var date = document.createElement("p");
  $("#date").text(moment().format("dddd, MMMM Do - h:mm:ss a"));
  //   date.innerHTML = timerAndDateEl;
};
currentDate();

var windowStart = function () {
  setInterval(currentDate, 1000);
};

windowStart();
// function setUpTimedElements() {
//   updateDate();
//   renderTextareaBackground();
// }

// function updateDate() {
//   $("#date").text(moment().format("dddd, MMMM Do - h:mm:ss a"));
// }
// var currentDate = function () {
//   var today = new Date();
//   var date =
//     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//   var time =
//     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   var dateTime = date + " " + time;
//   var createDate = document.createElement("p");
//   date.innerHTML = timerAndDateEl;
//   currentDateEl.appendChild(createDate);
// };
