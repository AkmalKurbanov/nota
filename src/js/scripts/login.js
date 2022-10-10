$('.log-in').on('click', function () {
  $("#log-in").addClass('open');
  $('#registration').removeClass('open');
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".log .log__window, .log-in");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.log').removeClass('open');
    }
  });
});

$('.registration').on('click', function () {
  $('#log-in').removeClass('open');
  $('#registration').addClass('open');
});