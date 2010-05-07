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

goog.provide('jsprettify.prettifyStr');

goog.require('goog.array');
goog.require('jsprettify.entities');


/**
 * Prettifies strings by replacing ASCII shorthand with proper typographical
 * symbols.
 * @param {string} text Text to prettify.
 * @return {string} Prettified text.
 */
jsprettify.prettifyStr = function(text) {
  var e = jsprettify.entities;
  // We replace single-quoted expressions by looking for pairs with the
  // shortest distance between them: we grab an open quote, any intervening
  // text, and a close quote.
  var pattern = new RegExp(
      "(^|[\\(\\s\"-])'([\\s\\S]*?)'($|[\\)\\s\".,;:?!-])", 'g');
  var replace = '$1' + e.lsquo + '$2' + e.rsquo + '$3';
  // We run the regexp until the string stops changing to handle nested quotes
  // and adjacent quotes.
  var old;
  do {
    old = text;
    text = text.replace(pattern, replace);
  } while (old != text);
  /**
   * This array holds entries consisting of patterns and replacements in the
   * order that they are to be applied. We need to preserve order, since e.g.
   * if -- were replaced before ---, disaster would ensue.
   * @type {Array.<{pattern: string, replace: string}>}
   */
  var subs = [
    {pattern: '\\.\\.\\.',                    replace: e.hellip},
    {pattern: "'",                            replace: e.rsquo},
    {pattern: '"($|[\\)\\s/.,;:?!\\u2019])',  replace: e.rdquo + '$1'},
    {pattern: '(^|[\\(\\s-/\\u2018])"',       replace: '$1' + e.ldquo},
    {pattern: '---',                          replace: e.emdash},
    {pattern: '--',                           replace: e.endash}
  ];
  goog.array.forEach(subs, function(sub) {
    var pattern = new RegExp(sub.pattern, 'g');
    text = text.replace(pattern, sub.replace);
  });
  return text;
};


window['jsprettify'] = window['jsprettify'] || {};
window['jsprettify']['prettifyStr'] = jsprettify.prettifyStr;
