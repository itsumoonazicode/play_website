$(function() {
  $('#modal-btn').on('click', function() {
    $('.modal').addClass('modal-container');
    $('.modal-container').on('click', function(event) {
      // 背景部分をクリックしたときのみモーダルを非表示にする
      if(event.target !== event.currentTarget) {
        return;
      } else {
        $('.modal').removeClass('modal-container');
      }
    })
  });
  $('.modal-close').on('click', function() {
    $('.modal').removeClass('modal-container');
  })
});