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

goog.provide('jsprettify.prettifyTextInputs');

goog.require('goog.dom');
goog.require('jsprettify.prettifyStr');


/**
 * Prettifies all textareas and text inputs in a document.
 */
jsprettify.prettifyTextInputs = function() {
  var textareas = goog.dom.$$('textarea');
  for (var i = 0, l = textareas.length; i < l; ++i) {
    var t = textareas[i];
    t.value = jsprettify.prettifyStr(t.value);
  }
  var inputs = goog.dom.$$('input');
  for (var i = 0, l = inputs.length; i < l; ++i) {
    var input = inputs[i];
    if (input.type == 'text') {
      input.value = jsprettify.prettifyStr(input.value);
    }
  }
};
