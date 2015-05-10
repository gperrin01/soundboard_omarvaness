soundManager.setup({ url: './SM2/swf/' });
  $(document).ready(function() {
  setUpEventListeners()
})
soundManager.onload = function(){
  soundManager.createSound()
}

/* Event Listeners  */
var setUpEventListeners = function() {
  $('.greeting').on('click', function() {
    showGreeting($(this).attr('id'));
    italian.play();
})
} /* end Listeners  */

/* Functions linked to Listeners  */
function showGreeting (language) {
  $('#output-text').text('WDI 13 speaks: ' + language);
}
/* end Functions linked to listeners */

/* All sounds */
var wow_papa = soundManager.createSound({ url: './audiofiles/italian.mp3'});
var italian = soundManager.createSound({ url: './audiofiles/wow_papa.m4a'});
// End sounds declarations



