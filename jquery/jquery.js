$(document).ready(function () {           // Document Ready Function
  $(".hamburger").click(function () {     // Hamburger Click Event
    // Toggle visibility of the navbar when hamburger is clicked
    $(".navbar").toggle();
  });
  $(window).resize(function () {          // Window Resize Event
    var win_size = $(window).width();     // Get the current window size
    // Check if the window size is greater than 992 pixels
    if (win_size > 992) {
      // If greater than 992 pixels, set the display property of the navbar to 'initial'
      $(".navbar").css("display", "flex");
    } else {
      // If less than or equal to 992 pixels, set the display property of the navbar to 'none'
      $(".navbar").css("display", "none");
    }
  });
});
