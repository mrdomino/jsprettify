/**
 * @license
 * Copyright 2010 Steven Dee. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var scriptId = 'cannytrousers_appspot_com_js_bm_js';
var scriptUrl = 'http://cannytrousers.appspot.com/js/bm.js';
var funcName = 'prettifyTextInputs';
if (! document.getElementById(scriptId)) {
  var script = document.createElement('script');
  script.src = scriptUrl;
  script.type = 'text/javascript';
  script.id = scriptId;
  document.body.appendChild(script);
}
(function doThingEventually() {
  if (funcName in window) {
    window[funcName]();
  } else {
    window.setTimeout(doThingEventually, 100);
  }
})();
