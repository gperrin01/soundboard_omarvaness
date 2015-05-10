      if (sm2.html5Only) {
        sm2._wD(options.id + ': No HTML5 support for this sound, and no Flash. Exiting.');
        return make();
      }

      // TODO: Move HTML5/flash checks into generic URL parsing/handling function.

soundManager.getSoundById('mySound2'
//  onready and ontimeout are also accepted parameters. call soundManager.setup() to see the full list.

// create "mySound"... // add 'id'
var mySound = soundManager.createSound({ url: '/path/to/an.mp3'});
// ...and play it
mySound.play();

function SoundManager(smURL, smID) {
  /**
   * to set these properties, use the setup() method - eg., soundManager.setup({url: '/swf/', flashVersion: 9})
   */
  this.defaultOptions = {
    'from': null,             // position to start playback within a sound (msec), default = beginning
    'loops': 1,               // how many times to repeat the sound (position will wrap around to 0, setPosition() will break out of loop when >0)
    'onplay': null,           // callback for "play" start
    'onpause': null,          // callback for "pause"
    'onresume': null,         // callback for "resume" (pause toggle)
    'whileplaying': null,     // callback during play (position update)
    'onposition': null,       // object containing times and function callbacks for positions of interest
    'onstop': null,           // callback for "user stop"
    'onfinish': null,         // callback function for "sound finished playing"

this.setPosition(nMsecOffset);
this.: stop(), stopAll, pause, pauseAll, togglePause, resume, resumeAll, 

mute, unmute, All, togleMute

this.getSoundById
  this.getMoviePercent 
this.destroySound()