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

      $('body').addClass('loading').addClass('noscroll');
  
      return false;
    });
  
    // BACK BUTTON
    $('.btn-back').on('click', function() {
      $('.popup').removeClass('popup-visible');
      $('body').removeClass('noscroll loading');
      $('.masterclose').removeClass('masterclose-visible');
    });
  
    // MASTERCLOSE
    $('.masterclose').on('click', function() {
      $('body').removeClass('noscroll loading');
      $(this).removeClass('masterclose-visible');
      $('.popup').removeClass('popup-visible');
    });
  
    // LOADING INDICATOR
    $('iframe').on('load', function() {
      $('body').removeClass('loading');
    });
  
    // ESCAPE KEY
    $(document).keyup(function(e) {
      if (e.keyCode === 27) { // esc key
        $('.popup').removeClass('popup-visible');
        $('body').removeClass('noscroll loading');
        $('.masterclose').removeClass('masterclose-visible');
      }
    });
  
});
