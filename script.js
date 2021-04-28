//Displays time at top of calendar
var currentDay = document.querySelector("#currentDay")

currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

//Color codes each block based on if it is in the past, present, or future

