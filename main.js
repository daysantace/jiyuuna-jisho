// main.js
// Copyleft (c) 2024 daysant - Jiyuuna Jisho
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = false;
});

document.getElementById('hamburger').addEventListener('mouseup', function() {
  if (hamburger) {
    console.log('hamburger open');
    hamburger = false;
    this.innerHTML = 'x';
  } else {
    console.log('hamburger closed');
    hamburger = true;
    this.innerHTML = '≡'
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