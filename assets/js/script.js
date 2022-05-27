let formEl = $('.time-block');
let saveButton = $('.saveBtn');
let rootEl = $('#root')
let button =  $('#save');
let clearButton =$('#clear')

// array which consists of 9 elements for the time blocks
let schedule = ["","","","","","","","",""];

//add moment.js for date at the top
var today  = moment().format("dddd, MMMM D, YYYY");
$("#currentDay").text(today);

//call init function on page load
init();

function init() {
    //load schedule data from local storage
    schedule = JSON.parse(localStorage.getItem("schedule"));
    //populate time blocks 
    if (schedule !== null) {
    for (let i=0; i<9; i++) {
         formEl.eq(i).val(schedule[i])
      }
    } else {
        schedule = ["","","","","","","","",""];
    }

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

    //assign colour classes based on time comparison

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

//save data to local storage on button click
$(".saveBtn").on('click',function() {
    var t = (this.id);
    schedule[t] = formEl.eq(t).val();
    localStorage.setItem("schedule", JSON.stringify(schedule));
});    

//clear all data
clearButton.on('click',function() {
  let empty = confirm("Are you sure you would like to clear all data?")
  if (empty = true) {
    for (let i=0; i<9; i++) {
        schedule[i]=""
         formEl.eq(i).val(schedule[i])
      }
      localStorage.setItem("schedule", JSON.stringify(schedule));
    }
});    
