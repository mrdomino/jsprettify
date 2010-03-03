// javascript:document.write(%27<script%20type=%22text/javascript%22%20src=%22%27%20+%27http://jsprettify.googlecode.com/hg/prettify.js%22></%27%20+%20%27script>%27);var%20tags%20=%20document.getElementsByTagName(%27textarea%27);for%20(var%20i%20=%200;%20i%20<%20tags.length;%20i++)%20{tags[i].value%20=%20jsprettify.prettifyStr(tags[i].value);}tags%20=%20document.getElementsByTagName(%27input%27);for%20(var%20i%20=%200;%20i%20<%20tags.length;%20i++)%20{if%20(tags[i].type%20==%20%27text%27)%20{tags[i].value%20=%20jsprettify.prettifyStr(tags[i].value);}}
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

document.write('<script type="text/javascript" src="' +
    'http://jsprettify.googlecode.com/hg/prettify.js"></' + 'script>');
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
