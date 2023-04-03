$(document).ready(function() {
    $('.accordion .header').click(function() {
      $(this).next('.content').slideToggle();
      $(this).parent().siblings().children('.content').slideUp();
    });
  });
  