$(document).ready(function() {
    var color = $('.project-cover').attr("data-color");
    $('.project-cover').css("background-color", color);
    
    $('.article a').css('color', color);
});