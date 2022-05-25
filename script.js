var formEl = $('.time-block');
console.log(formEl);

// array which consists of 9 elements for the time blocks
let schedule = ["","","","","","","","",""];

//add moment.js for date at the top
var today  = moment().format("dddd, MMMM D, YYYY");
$("#currentDay").text(today);

function init() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
}

for (let i = 0; i< formEl.length; i++) {

}

// if statement to determine if block of time is now, earlier, or later

for (let i = 0; i<schedule.length; i++) {

if (moment()> formEl[i].moment(data-endTime, "HH:mm")) {
    formEl[i].addClass("future")
    formEl[i].removeClass("present")
    formEl[i].removeClass("past")
}
else if (moment() < formEl[i].moment(data-startTime, "HH:mm")) {
    formEl[i].addClass("past")
    formEl[i].removeClass("present")
    formEl[i].removeClass("future")
}
else {
    formEl[i].addClass("present")
    formEl[i].removeClass("future")
}
}

//reload on page load and prevent default

//save data to local storage

//click save button at index i causes input form i's value to be saved in array at index i
saveBtn.on('click', function () {
    event.preventDefault();
    schedule[i] = formEl[i].val();
    localStorage.setItem("schedule", JSON.stringify(schedule));

  });