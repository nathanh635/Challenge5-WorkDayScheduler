let formEl = $('.time-block');
let saveButton = $('.saveBtn');
let rootEl = $('#root')
let button =  $('#save');

// array which consists of 9 elements for the time blocks
let schedule = ["","","","","","","","",""];

//add moment.js for date at the top
var today  = moment().format("dddd, MMMM D, YYYY");
$("#currentDay").text(today);

init();



function init() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    for (let i=0; i<9; i++) {
        localStorage.setItem("schedule", JSON.stringify(schedule));
         formEl.eq(i).val(schedule[i])
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
$(".saveBtn").on('click',function() {
    var t = (this.id);
    schedule[t] = formEl.eq(t).val();
    localStorage.setItem("schedule", JSON.stringify(schedule));
    console.log(schedule);
});    
