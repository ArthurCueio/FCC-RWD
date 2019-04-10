$(document).ready(function () {
  $('#menu-toggle').click(function () {
    $('#nav-bar').slideToggle();
    $('#b-top').toggleClass('b-top-transform');
    $('#b-middle').toggleClass('b-middle-transform');
    $('#b-bottom').toggleClass('b-bottom-transform');
  });
});