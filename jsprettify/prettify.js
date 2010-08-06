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

goog.provide('jsprettify.prettify');

goog.require('goog.dom');
goog.require('jsprettify.prettifyHtml');


/**
 * Auto-prettifies everything with classname 'prettify' in a document. This
 * can be used in e.g. a window.onload function to automatically prettify all
 * text when the window has loaded.
 */
jsprettify.prettify = function() {
  var es = goog.dom.$$(null, 'prettify');
  var opts = {'uglyTags': ['code', 'kbd', 'pre', 'script'],
              'uglyClass': 'keepugly'};
  for (var i = 0; i < es.length; i++) {
    jsprettify.prettifyHtml(es[i], opts);
  }
};
