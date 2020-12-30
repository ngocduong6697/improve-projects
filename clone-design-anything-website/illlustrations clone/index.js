$('.js-download').hover(function() {
    $('#js-download-list').slideDown(100);
}
, function() {
    $('#js-download-list').hide();
  }
)

$('.js-download-list').hover(function() {
  $('#js-download-list').show();
})