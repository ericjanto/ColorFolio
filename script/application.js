$(document).ready(function() {
  
    // LINK POPUP
    $('.link-popup').on('click', function(event) {
  
      var url = $(this).attr('href');
      var extUrl = $(this).attr('data-url')
      var title = $(this).attr('title');
  
      event.preventDefault();
      $('.masterclose').addClass('masterclose-visible');
      $('.popup').addClass('popup-visible');
      $('.popup iframe').attr('src', url);
      $('.popup .btn-external').attr('href', extUrl);
      $('.popup h2').html(title);

      $('body').addClass('noscroll');

      var color = $(this).parent().css('background-color');

      $('.popup-titlebar').css("background-color", color);
      $('iframe').css('background-color', color);

      // CUSTOM POPUP BAR

      switch(color) {
        case "rgb(218, 223, 214)":
          $('.popup h2').css("color", "#000000");
          $('.btn').css("color", "#000000");
        break;
        default:
          $('.popup h2').css("color", "#ffffff");
          $('.btn').css('color', '#ffffff');
      }

      // CUSTOM CHROME TAB

      var tab = $('meta[name=theme-color]');
      tab.attr('content', color);
    
      return false;
    });
  
    // BACK BUTTON
    $('.btn-back').on('click', function() {
      $('.popup').removeClass('popup-visible');
      $('body').removeClass('noscroll loading');
      $('.masterclose').removeClass('masterclose-visible');

      var tab = $('meta[name=theme-color]');
      tab.attr('content', '#eeca00');
    });
  
    // MASTERCLOSE
    $('.masterclose').on('click', function() {
      $('body').removeClass('noscroll loading');
      $(this).removeClass('masterclose-visible');
      $('.popup').removeClass('popup-visible');

      var tab = $('meta[name=theme-color]');
      tab.attr('content', '#eeca00');
    });
  
    // ESCAPE KEY
    $(document).keyup(function(e) {
      if (e.keyCode === 27) { // esc key
        $('.popup').removeClass('popup-visible');
        $('body').removeClass('noscroll loading');
        $('.masterclose').removeClass('masterclose-visible');

        var tab = $('meta[name=theme-color]');
        tab.attr('content', '#eeca00');
      }
    });
});
