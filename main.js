// main.js
// Copyleft (c) 2024 daysant - Jiyuuna Jisho
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = false;
  menuButton("dictionary");

  document.getElementById('hamburger').addEventListener('mouseup', function() {
    hamburger = !hamburger;
    this.innerHTML = hamburger ? '≡' : 'x';
    document.getElementById("nav").style.display = hamburger ? "none" : "block";
  });

  function handleInputEvent(inputId, action) {
    document.getElementById(inputId).addEventListener('keypress', function(event) {
      if (event.key === 'Enter' || event.type === 'blur') {
        const input = document.getElementById(inputId).value;
        action(input);
      }
    });
  }

  handleInputEvent('dictionaryInput', lookUp);
  handleInputEvent('kanjiInput', kanjiLookUp);
  handleInputEvent('conjugatorInput', conjugate);
});

function menuButton(menu){
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  var element = document.getElementById(menu);
  if (element) {
    element.style.display = "block";
    document.getElementById("hamburger").innerHTML = '≡';
    document.getElementById("nav").style.display = "none";
  }
}

function lookUp(){
  fetch('result.html')
  .then(response => response.text())
  .then(fileContent => {
    const parser = new DOMParser();
    const result = parser.parseFromString(fileContent, 'text/html');
    const entry = result.querySelector('#dictionary').innerHTML;
    document.querySelector('#dictionaryResult').innerHTML = entry;
  })
}
