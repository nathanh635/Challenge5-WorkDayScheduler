//add moment.js for date at the top

// array which consists of 9 elements for the time blocks
let schedule = ["","","","","","","","",""];


var today  = moment().format("dddd, MMMM D, YYYY");
$("#currentDay").text(today);

// if statement to determine if block of time is now, earlier, or later

if (moment()> ) {
    timeblock.addClass("future")
    timeblock.removeClass("present")
    timeblock.removeClass("past")
}
else if (moment() < ) {
    timeblock.addClass("past")
    timeblock.removeClass("present")
    timeblock.removeClass("future")
}
else {
    timeblock.addClass("present")
    timeblock.removeClass("future")
}

//reload on page load and prevent default

//save data to local storage

saveBtn.on('click', function () {
    
  });