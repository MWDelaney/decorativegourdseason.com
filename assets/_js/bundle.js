import $ from 'jquery';

// Get today's date
var today = new Date();
today.setHours(0, 0, 0, 0);
var todayCompare = today.getTime();

// Get the start of decorative gourd season this year (month starts at 0)
var start = new Date(today.getFullYear(), 8, 22);
start.setHours(0, 0, 0, 0);
var startCompare = start.getTime();

// Get the end of decorative gourd season this year (month starts at 0)
var end = new Date(today.getFullYear(), 11, 21);
end.setHours(0, 0, 0, 0);
var endCompare = end.getTime();

// Check if today's date is after the beginning,
//  and before the end of decorative gourd season
if (parseInt(todayCompare) >= parseInt(startCompare)
    && parseInt(todayCompare) <= parseInt(endCompare)) {
    // If so, remove  the "not" section
    $('.not').remove();
} else {
  // If not, remove the seson section
  $('.season').remove();
}
