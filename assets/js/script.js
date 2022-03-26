var timeBlock = document.querySelector(".time-block");
var currentDateEl = document.querySelector("#lead");
var timerAndDateEl = moment().format("LLLL");

// var currentDate = $(window).load(function () {
//   //   onload(window).then(timerAndDateEl);
//   var date = document.createElement("p");
//   date.innerText = timerAndDateEl;
//   currentDateEl.appendChild(date);
// });

// function setUpTimedElements() {
//   updateDate();
//   renderTextareaBackground();
// }

// function updateDate() {
//   $("#date").text(moment().format("dddd, MMMM Do - h:mm:ss a"));
// }
var currentDate = function () {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  var createDate = document.createElement("p");
  date.innerText = timerAndDateEl;
  currentDateEl.appendChild(createDate);
};
