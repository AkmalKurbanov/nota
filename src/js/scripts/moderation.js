jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".moderation .moderation__message");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.moderation').hide();
    }
  });
});