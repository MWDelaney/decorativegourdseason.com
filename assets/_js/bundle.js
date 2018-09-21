import $ from 'jquery';

// Get today's date
var today = new Date();

// Get the start of decorative gourd season this year
var start = new Date(today.getFullYear() + '-08-22');

// Get the end of decorative gourd season this year
var end = new Date(today.getFullYear() + '-12-21');

// Check if today's date is after the beginning,
//  and before the end of decorative gourd season
if (today >= start && today <= end) {
    // If so, remove  the "not" section
    $('.not').remove();
} else {
  // If not, remove the seson section
  $('.season').remove();
}
