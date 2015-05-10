console.log('hello');

var buttons = document.getElementsByClassName('greeting');
// console.log(buttons);
for(var i=0; i<buttons.length; i++){
  buttons[i].addEventListener('click', function(event) {
  var zhanTestObject = {
                        language: this.id, 
                        name: ['Lauren', 'Zhan', 'Ben']
                      }
  showGreeting(zhanTestObject)
  }) // click event
} // for loop

function showGreeting (language) {
  var output = document.getElementById('output-text');
  output.innerText = 'WDI 13 speaks: ' + language;
}


// $(document).ready(function() {})