let formEl = $('.time-block');

let formEnd = $('.time-block').attr("data-endTime")
let saveButton = $('.saveBtn');
let rootEl = $('#root')

// array which consists of 9 elements for the time blocks
let schedule = ["","","","","","","","",""];

//add moment.js for date at the top
var today  = moment().format("dddd, MMMM D, YYYY");
$("#currentDay").text(today);

init();

function init() {
    //schedule = JSON.parse(localStorage.getItem("schedule"));
    setColours();

}

function setColours() {

// if statement to determine if block of time is now, earlier, or later
for (let i = 0; i<schedule.length; i++) {

    let dataStart = formEl.eq(i).attr('data-startTime');
    let dataEnd = formEl.eq(i).attr('data-endTime');

    let startTime = moment(dataStart, "HH:mm");
    let endTime = moment(dataEnd, "HH:mm");

    let now = moment();

if (now< startTime) {
    formEl.eq(i).addClass('future');
    formEl.eq(i).removeClass('present');
    formEl.eq(i).removeClass('past');
}
else if (now > endTime) {
    formEl.eq(i).addClass("past");
    formEl.eq(i).removeClass("present");
    formEl.eq(i).removeClass("future");
}
else {
    formEl.eq(i).addClass("present");
    formEl.eq(i).removeClass("future");
}
}
}



//save data to local storage

//click save button at index i causes input form i's value to be saved in array at index i
for (let i = 0; i < schedule.length; i++)
{
    saveButton.eq(i).onclick = saveData(i)
}

function saveData(i) {
    schedule[i] = formEl.eq(i).text;
    localStorage.setItem("schedule", JSON.stringify(schedule));

  };