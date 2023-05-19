$(function () {
  // Gets the current date
  var currentDate = new Date();

  // month, day, year format 
  var month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();

  // date format
  var formattedDate = month + '/' + day + '/' + year;

  // Display the formatted date at the top of the calendar
  $('#currentDay').text(formattedDate);
});

// function that automatically reads the hour of day and determines what's past, present, or future
$(function () {
  var hour = dayjs().hour();
  $('.time-block').each(function () {
    $(this).attr('id');
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);

    if (hour < rowHour) {
      $(this).addClass('future')
    } else if (hour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
    console.log(hour);
  })
});

// function to set events in the timeblocks into local storage
$(function () {
  $(document).on('click', '.saveBtn', function () {
    var key = $(this).closest('.time-block').attr('id');
    var textArea = $(this).prev().val();
    localStorage.setItem(key, textArea);
  })
});

// function to pull local storage data after reload
$('.time-block').each(function () {
  var id = $(this).attr('id');
  var textArea = $(this).find('.description');
  var text = localStorage.getItem(id);
  textArea.val(text);
}); 