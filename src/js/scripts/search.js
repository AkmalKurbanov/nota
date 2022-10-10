$('.search-btn').on('click', function () {
  $('.search').addClass('open');
});


jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".search, .search-btn");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.search').removeClass('open');
    }
  });
});