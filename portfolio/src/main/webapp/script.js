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

/**
 * Adds a random greeting to the page.
 */

var i = 0;
var txt = 'Melissa is a born and raised Bostonian and is a current Junior at Boston University majoring in Computer Science. She is passionate about creating things that can better the lives around her. Her goal is to always build products that makes lives easier and enjoying for everyone. If she is not coding, Melissa can be found running or eating a very big bowl of instant noodle (preferably Shin).';
var speed = 400;

window.addEventListener('scroll', function() {
  typeWriter();
});

function typeWriter() {
    // document.getElementById("learnmore").style.display = "none";
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

