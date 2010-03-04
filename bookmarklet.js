// Copyright 2010 Steven Dee. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

if (! document.getElementById('prettify-script')) {
  var script = document.createElement('script');
  script.src = 'http://jsprettify.googlecode.com/hg/prettify.js?r=jsprettify-stable';
  script.type = 'text/javascript';
  script.id = 'prettify-script';
  document.body.appendChild(script);
}
function prettifyMe() {
  var tags = document.getElementsByTagName('textarea');
  for (var i = 0; i < tags.length; i++) {
    tags[i].value = jsprettify.prettifyStr(tags[i].value);
  }
  tags = document.getElementsByTagName('input');
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].type == 'text') {
      tags[i].value = jsprettify.prettifyStr(tags[i].value);
    }
  }
}
function doPrettify() {
  if (typeof jsprettify != 'undefined' &&
      typeof jsprettify.prettifyStr != 'undefined') {
    prettifyMe();
  } else {
    setTimeout(doPrettify, 100);
  }
}
doPrettify();
