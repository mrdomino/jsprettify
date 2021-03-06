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

goog.require('jsprettify.prettify');

window['jsprettify'] = window['jsprettify'] || {};
window['jsprettify']['prettify'] = jsprettify.prettify;

// XXX DEPRECATED
window['prettify'] = function() {
  alert('WARNING: this page is calling jsprettify in a deprecated manner. ' +
        'The correct, current way to call jsprettify is with ' +
        'window.jsprettify.prettify, not window.prettify. Sorry for the ' +
        'inconvenience.');
  window.jsprettify.prettify();
};
