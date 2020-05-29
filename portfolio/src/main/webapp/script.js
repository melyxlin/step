// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var sp;
var type;
var c;

function pageFunction() {
    myVar = setTimeout(showPage, 3500);
    type = setTimeout(typeWriter, 4000);
    c = setTimeout(getComments, 3500);
}

function showPage() {
    document.getElementById("loader").style.display="none";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("landing").style.display = "block"
    document.getElementById("scrollup").style.display = "block";
    document.getElementById("scrolldown").style.display = "block"
    document.getElementById("about").style.display = "block"
    document.getElementById("work").style.display = "block"
    document.getElementById("projects").style.display = "block"
    document.getElementById("contact").style.display = "block";
    document.getElementById("content").style.display = "block";

    document.getElementById("footer").style.display = "block";
}


var i = 0;
var txt = 'I am a Bostonian 📍, Coder 👩‍💻, and Noodle Enthusiast 🍜.'
var speed = 50;

//function for typing effect on screen
function typeWriter() {
    if (i < txt.length) {
    document.getElementById("subheading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//function to make navabar contents active or not
function clickSingleA(a)
{
    items = document.querySelectorAll('.active');
    
    if(items.length) 
    {
        items[0].className = 'single';
    }

    a.className = 'active';
}

// function getMessage() {
//   fetch('/data').then(response => response.text()).then((message) => {
//     document.getElementById('message-container').innerText = message;
//   });

// }

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function getComments(){
    fetch('/data')  // sends a request to /my-data-url
    .then(response => response.json()) // parses the response as JSON
    .then((comments) => { // now we can reference the fields in myObject!
        const commentsListElement = document.getElementById('message-container');
        commentsListElement.innerHTML = '';
        for (i=0; i<comments.length;i++){
            console.log(comments[i]);
            commentsListElement.appendChild(
            createListElement(comments[i]));
        }
    });
}