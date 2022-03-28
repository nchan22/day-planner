// variable list
var currentDayEl = document.querySelector("#currentDay");
var scheduleContainerEl = document.querySelector(".container");
var textAreaEl = document.querySelectorAll(".description");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var currentTime = Number(moment().format("H"));
var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// displaying the day on top of the calender
var displayDay = function () {
  $("#date").text(moment().format("dddd, MMMM Do - h:mm:ss a"));
};

//checking the time for the color of the timeslots
var checkTime = function () {
  for (var i = 0; i < workHours.length; i++) {
    if (currentTime > workHours[i]) {
      textAreaEl[i].classList.add("past");
    } else if (currentTime === workHours[i]) {
      textAreaEl[i].classList.add("present");
    } else {
      textAreaEl[i].classList.add("future");
    }
  }
};

//local storage
var saveDescription = function (event) {
  var time = event.target.parentNode.children[0].textContent;
  var description = event.target.parentNode.children[1].value;

  localStorage.setItem(time, description);
};

var getSchedule = function () {
  for (var i = 0; i < textAreaEl.length; i++) {
    var time = textAreaEl[i].parentNode.children[0].textContent;

    var saveValue = localStorage.getItem(time);
    textAreaEl[i].textContent = saveValue;
  }
};

//event
var addEvents = function () {
  for (var i = 0; i < saveBtnEl.length; i++) {
    saveBtnEl[i].addEventListener("click", saveDescription);
  }
};
addEvents();

//When document is ready, set up
$(document).ready(function () {
  displayDay();
  getSchedule();
  checkTime();
  // Check time sensitive elements using intervals
  setInterval(displayDay, 1000);
  setInterval(checkTime, 60 * 1000);
});
