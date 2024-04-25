// main.js
// Copyleft (c) 2024 daysant - Jiyuuna Jisho
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me

var resource

document.addEventListener('DOMContentLoaded', function() {
  
  fetch('resources.html')
  .then(response => response.text())
  .then(fileContent => {
    const PARSER = new DOMParser();
    resource = PARSER.parseFromString(fileContent,'text/html');
    document.querySelector('main').innerHTML = resource.getElementById('main').innerHTML
  })
  
  document.querySelector('main')
  
  var hamburger = false;

  document.getElementById('hamburger').addEventListener('mouseup', function() {
    hamburger = !hamburger;
    this.innerHTML = hamburger ? '≡' : 'x';
    document.getElementById('nav').style.display = hamburger ? 'none' : 'block';
  });

  function handleInputEvent(inputId, action) {
    document.getElementById(inputId).addEventListener('keypress', function(event) {
      if (event.key === 'Enter' || event.type === 'blur') {
        const INPUT = document.getElementById(inputId).value;
        action(INPUT);
      }
    });
  }

  handleInputEvent('dictionaryInput', lookUp("Test"));
  handleInputEvent('kanjiInput', kanjiLookUp);
  handleInputEvent('conjugatorInput', conjugate);

  function menuButton(menu){
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
  }

  var element = document.getElementById(menu);
  if (element) {
    element.style.display = 'block';
    document.getElementById('hamburger').innerHTML = '≡';
    document.getElementById('nav').style.display = 'none';
  }
}

  function lookUp(input){
      const ENTRY = resource.getElementById('dictionaryEntry').innerHTML;
      document.getElementById('dictionaryResult').innerHTML = ENTRY;
  }
  
  function xmlParse(){
    const parser = new DOMParser();
  }

});