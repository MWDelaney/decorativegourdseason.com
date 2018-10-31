import $ from 'jquery';

// Get today's date
var today = new Date();
today.setHours(0, 0, 0, 0);
var todayCompare = '' + today.getMonth() + today.getDate();
console.log(todayCompare); // eslint-disable-line

// Get the start of decorative gourd season this year (month starts at 0)
var start = new Date(today.getFullYear(), 8, 22);
start.setHours(0, 0, 0, 0);
var startCompare = '' + start.getMonth() + start.getDate();
console.log(startCompare); // eslint-disable-line

// Get the end of decorative gourd season this year (month starts at 0)
var end = new Date(today.getFullYear(), 11, 21);
end.setHours(0, 0, 0, 0);
var endCompare = '' + end.getMonth() + end.getDate();
console.log(endCompare); // eslint-disable-line

// Check if today's date is after the beginning,
//  and before the end of decorative gourd season
if (parseInt(todayCompare) >= parseInt(startCompare)
    && parseInt(todayCompare) <= parseInt(endCompare)) {
    // If so, remove  the "not" section
    console.log('during'); // eslint-disable-line
    $('.not').remove();
} else {
  // If not, remove the seson section
  $('.season').remove();
}
