$(document).ready(function(){
  setUpEventListeners();
  soundManager.setup( {
    url: './SM2/swf/',
    flashVersion:9,
    preferFlash: false,
  })
})

/* Event Listeners  */
var setUpEventListeners = function() {
  $('#pictop1').on('click', function() {
    playSound('opapa_clap.m4a');
  })
  $('#pictop2').on('click', function() {
    playSound('vpapa_intro.m4a');
  })
  $('#pictop3').on('click', function() {
    playSound('woow_call_maybe.m4a')
  })
  $('#cake').on('click', function() {
    playSound( 'coldplay_cake.m4a' )
  })
  $('#pictop4').on('click', function() {
    playSound( 'bravo.m4a' )
  })
  $('#pictop5').on('click', function() {
    playSound( 'habibi_clap.m4a' )
  })
  $('#pictop6').on('click', function() {
    playSound( 'Omarpapa_laugh.m4a' )
  })
  $('#happy').on('click', function() {
    togglePauseSound('happy.mp3')
  })

} /* end Listeners  */

/* Functions linked to Listeners  */
function playSound(file) {
  var file = soundManager.createSound({
    id: 'file',
    url: './audio/' +file});
  file.play();
}
function togglePauseSound(file) {
  if (soundManager.getSoundById(file) === 'undefined') {
    playSound(file); 
  } else soundManager.togglePause(file);
}
/* end Functions linked to listeners */


// Show/hide the key codes
