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

goog.provide('jsprettify');

goog.require('goog.object');
goog.require('jsprettify.prettify');
goog.require('jsprettify.prettifyHtml');
goog.require('jsprettify.prettifyStr');
goog.require('jsprettify.prettifyTextInputs');

/*
 * XXX DEPRECATED
 * Back in the day, we stuck everything in the global namespace. Now,
 * everything exists under the window.jsprettify namespace -- e.g.,
 * window.jsprettify.prettifyStr. One day, the entries in the global
 * namespace will go away.
 */
goog.object.extend(window, window['jsprettify']);
