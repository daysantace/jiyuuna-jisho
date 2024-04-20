// main.js
// Copyleft (c) 2024 daysant - Jiyuuna Jisho
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = false;
  menuButton("dictionary")
});

document.getElementById('hamburger').addEventListener('mouseup', function() {
  if (hamburger) {
    hamburger = false;
    this.innerHTML = 'x';
    document.getElementById("nav").style.display = "block";
  } else {
    hamburger = true;
    this.innerHTML = '≡'
    document.getElementById("nav").style.display = "none";
  }
});

document.getElementById('dictionaryInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById('dictionaryInput').value;
    lookUp(input);
  }
});

document.getElementById('dictionaryInput').addEventListener('blur', function() {
  const input = document.getElementById('dictionaryInput').value;
  lookUp(input);
});

document.getElementById('kanjiInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById('kanjiInput').value;
    lookUpKanji(input);
  }
});

document.getElementById('kanjiInput').addEventListener('blur', function() {
  const input = document.getElementById('kanjiInput').value;
  lookUpKanji(input);
});

document.getElementById('conjugatorInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById('conjugatorInput').value;
    conjugate(input);
  }
});

document.getElementById('conjugatorInput').addEventListener('blur', function() {
  const input = document.getElementById('conjugatorInput').value;
  conjugate(input);
});

function lookUp(input) {
  console.log("Looking up",input);
}

function lookUpKanji(input) {
  console.log("Looking up kanji",input);
}

function conjugate(input) {
  console.log("Conjugating",input);
}

function menuButton(menu){
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  switch (menu) {
    case "dictionary":
      document.getElementById("dictionary").style.display = "block";
      
      hamburger = true;
      document.getElementById("hamburger").innerHTML = '≡'
      document.getElementById("nav").style.display = "none";
      break;
    case "kanji":
      document.getElementById("kanji").style.display = "block";

      hamburger = true;
      document.getElementById("hamburger").innerHTML = '≡'
      document.getElementById("nav").style.display = "none";
      break;
    case "conjugator":
      document.getElementById("conjugator").style.display = "block";

      hamburger = true;
      document.getElementById("hamburger").innerHTML = '≡'
      document.getElementById("nav").style.display = "none";
      break;
    case "about":
      document.getElementById("about").style.display = "block";

      hamburger = true;
      document.getElementById("hamburger").innerHTML = '≡'
      document.getElementById("nav").style.display = "none";
      break;
  }
}