// soundManager.setup({ url: './SM2/swf/' });
  $(document).ready(function() {
  setUpEventListeners()
})
// soundManager.onload = function(){
//   soundManager.createSound()
// }

/* Event Listeners  */
var setUpEventListeners = function() {
  $('#pictop1').on('click', function() {
    console.log( 'opapa_clap.play()' )
  })
  $('#pictop2').on('click', function() {
    console.log( 'vpapa_intro.play()' )
  })
  $('#pictop3').on('click', function() {
    console.log( 'woow_call_maybe()' )
  })
  $('#cake').on('click', function() {
    console.log( 'coldplay_cake.play()' )
  })
  $('#pictop4').on('click', function() {
    console.log( 'bravo.play()' )
  })
  $('#pictop5').on('click', function() {
    console.log( 'habibi_clap.play()' )
  })
  $('#pictop6').on('click', function() {
    console.log( 'Omarpapa_laugh.play()' )
  })
  $('#happy').on('click', function() {
    console.log( 'happy.togglePause()' )
  })

} /* end Listeners  */

/* Functions linked to Listeners  */

/* end Functions linked to listeners */

/* All sounds */
var opapa_clap = soundManager.createSound({ url: './audio/opapa_clap.m4a'});
var vpapa_intro = soundManager.createSound({ url: './audio/vpapa_intro.m4a'});
var woow_call_maybe = soundManager.createSound({ url: './audio/woow_call_maybe.m4a'});
var coldplay_cake = soundManager.createSound({ url: './audio/coldplay_cake.m4a'});
var bravo = soundManager.createSound({ url: './audio/bravo.m4a'});
var habibi_clap = soundManager.createSound({ url: './audio/habibi_clap.m4a'});
var Omarpapa_laugh = soundManager.createSound({ url: './audio/Omarpapa_laugh.m4a'});
var happy = soundManager.createSound({ url: './audio/happy.m4a'});
// End sounds declarations



