## Challenge 5 - Work Day Scheduling App

For Challenge 5, the requirement was to add to the provided code to construct a work day scheduling app that updates colours based on the current time; past time blocks are grey, current time blocks are red, and future time blocks are green.

A number of classes were already defined, so I hope I applied the correct classes to all the components.

The button at the end of each row will save the data IN THAT ROW to local storage as part of an array of strings. 

On page load, the time blocks are assigned colours based on the comparison to the current time, and the data from storage is pulled and time blocks are populated based on the data in storage.

I also added a "Clear" button which will clear all the data in the local storage and reset the time blocks to blanks. It will ask for confirmation first, so if it is clicked accidentally, the user has a chance to cancel the operation.

Github Repository: https://github.com/nathanh635/Challenge5-WorkDayScheduler

Deployed Page: https://nathanh635.github.io/Challenge5-WorkDayScheduler/