// main.js
// Copyleft (c) 2024 daysant - Jiyuuna Jisho
// This file is licensed under the terms of the AGPL v3.0-or-later.
// daysant@proton.me

let api = {
  'jisho': 'https://jisho.org/api/v1/search/words?keyword='
}

var resource;

document.addEventListener('DOMContentLoaded', function() {
  
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
        action(INPUT)
      }
    });
  }

  handleInputEvent('dictionaryInput', lookUp);
});

async function lookUp(input){
  document.getElementById('dictionaryResult').innerHTML = `Looking up ${input}...`;
  
  var data = await getApiData(api.jisho,input);
  
  if (data==-1){
    return
  };
  
  fetch('res/resources.html')
  .then(response => response.text())
  .then(fileContent => {
    const parser = new DOMParser();
    resource = parser.parseFromString(fileContent,'text/html');
    resource.getElementById('dictionaryTitle').innerHTML = input
    resource.getElementById('dictionaryResult').innerHTML = data
    const entry = resource.getElementById('dictionary').innerHTML;
    document.getElementById('dictionaryResult').innerHTML = entry;
  })
  }

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

async function getApiData(api,input){
  try {
    const response = await fetch((api)+input);
    const data = await response.json();
    return JSON.stringify(data);
  } catch(error) {
    console.error(`Error getting API data: ${error}`)
    return -1;
  }
}