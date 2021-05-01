var hour9 = $("#9")
var hour10 = $("#10")
var hour11 = $("#11")
var hour12 = $("#12")
var hour1 = $("#13")
var hour2 = $("#14")
var hour3 = $("#15")
var hour4 = $("#15")
var hour5 = $("#17")
var time = moment();

//Displays time at top of calendar
var currentDay = document.querySelector("#currentDay")

currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

//Color codes each block based on if it is past, present, or future

function blockColor() {

    var hour = time.hours();

    $(".time-block").each(function (){
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }

        else {
            $(this).addClass("past");
        }
    })
}

blockColor();

//Creates function to save timeblock input (events)

function saveEvent() {

    $(".time-block").each(function(){
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !==null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

saveEvent();

//Adds event listener to "SAVE" button to run the save event function
var saveBtn = $(".saveBtn");

saveBtn.on("click", function(){
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});