$(function() {
  $('#modal-btn').on('click', function() {
    $('.modal-contents').css({
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      'z-index': '2'
    });
  })
});