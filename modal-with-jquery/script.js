$(function() {
  $('#modal-btn').on('click', function() {
    $('.modal').addClass('modal-container');
  });
  $('.modal-close').on('click', function() {
    $('.modal').removeClass('modal-container');
  })
});