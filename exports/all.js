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

goog.require('jsprettify');

window['jsprettify'] =
  {'prettify': jsprettify.prettify
  ,'prettifyHtml': jsprettify.prettifyHtml
  ,'prettifyStr': jsprettify.prettifyStr
  ,'prettifyTextInputs': jsprettify.prettifyTextInputs
  ,'run': jsprettify.run
  };

// XXX DEPRECATED: This will go away soon!
for (var k in window['jsprettify']) {
  window[k] = function() {
    alert('WARNING: this page is calling jsprettify in a deprecated manner. ' +
          'The correct, current way to call jsprettify is through ' +
          'window.jsprettify.*, not window.*. Sorry for the ' +
          'inconvenience.');
    window['jsprettify'][k]();
  };
};

// Special message for prettifyTextInputs, which is likely used by
// bookmarklets.
window['prettifyTextInputs'] = function() {
  alert('You appear to be using an out-of-date version of the jsprettify ' +
        'bookmarklet. It may go away at some point. Meanwhile, go to ' +
        'http://code.google.com/p/jsprettify/wiki/MakingInputsPretty to ' +
        'get the updated bookmarklet.');
};
