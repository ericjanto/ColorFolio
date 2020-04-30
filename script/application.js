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

    // START SCREEN
    $('.color-button').on('click', function(event) {
      var color = $('.start-screen').css('background-color');
      var newColor;
      var num = Math.floor(Math.random() * 7);

      switch(num) {
        case 0:
          newColor = 'rgb(238, 202, 0)';
        break;
        case 1:
          newColor = 'rgb(70, 88, 168)';
        break;
        case 2:
          newColor = 'rgb(197, 71, 71)';
        break;
        case 3:
          newColor = 'rgb(23, 109, 23)';
        break;
        case 4:
          newColor = 'rgb(138, 84, 56)';
        break;
        case 5:
          newColor = 'rgb(199, 179, 255)';
        break;
        case 6:
          newColor = 'rgb(228, 140, 58)';
        break;
      }

      if (color == newColor) {
          newColor = 'rgb(131, 231, 240)';
      }

      $('.start-screen').css('background-color', newColor);
      $('.button-text').css('color', newColor);

      $('.color-button').hover(function() {
        $('.button-text').css('color', newColor);
      });

      $('.color-button').mouseleave(function() {
        $('.button-text').css('color', '#000');
      });

      var tab = $('meta[name=theme-color]');
      tab.attr('content', newColor);

      $('body').css('background-color', newColor);

      $('.button-text').text('Yeee! Now scroll down to see my work!');
    });

});
