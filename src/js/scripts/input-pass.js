$('.pass-hide').on('click', function () {
  $(this).hide();
  $(this).parent().find('.pass-show').show();
  $(this).parent().find('input').focus();
  $(this).parent().find('input').attr('type', 'text');
});
$('.pass-show').on('click', function () {
  $(this).hide();
  $(this).parent().find('.pass-hide').show();
  $(this).parent().find('input').focus();
  $(this).parent().find('input').attr('type', 'password');
});