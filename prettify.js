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

if (typeof goog != 'undefined') {
goog.provide('jsprettify.entities');
goog.provide('jsprettify.prettifyHtml');
goog.provide('jsprettify.prettifyStr');

goog.require('goog.dom');
}

var jsprettify = jsprettify || {};

/**
 * This object contains some common typographical HTML entities.
 * @type {Object.<string,string>}
 */
jsprettify.entities = {
  endash: '\u2013',
  emdash: '\u2014',
  lsquo:  '\u2018',
  rsquo:  '\u2019',
  ldquo:  '\u201c',
  rdquo:  '\u201d',
  hellip: '\u2026'
};


/**
 * Prettifies strings by replacing ASCII shorthand with proper typographical
 * symbols.
 * @param {string} text Text to prettify.
 * @return {string} Prettified text.
 */
jsprettify.prettifyStr = function(text) {
  var e = jsprettify.entities;
  /**
   * This array-of-arrays holds entries consisting of patterns and
   * substitutions in the order that they are to be applied. We need to
   * preserve order, since e.g. if -- were replaced before ---, disaster
   * would ensue.
   * @type {Array.<Array.<string>>}
   */
  var subs = [
    ['---', e.emdash],
    ['--', e.endash],
    ['\\.\\.\\.', e.hellip],
    ["(^|[\\s\"])'", '$1' + e.lsquo],
    ['(^|\\s)"', '$1' + e.ldquo],
    ["'($|[\\s\"])?", e.rsquo + '$1'],
    ['"($|[\\s.,;:?!])', e.rdquo + '$1']
  ];
  for (var i = 0; i < subs.length; i++) {
    var arr = subs[i];
    var re = new RegExp(arr[0], 'g');
    var sub = arr[1];
    text = text.replace(re, sub);
  };
  return text;
};

/**
 * Prettifies HTML Nodes by recursively prettifying their child text nodes.
 * This function operates nondestructively -- a prettified HTML fragment is
 * returned, and can replace the existing one to prettify a document.
 * @param {Node|null} e Node to start prettifying.
 * @return {Node|null} Prettified version of the passed node.
 */
jsprettify.prettifyHtml = function(e) {
  if (e == null) {
    return null;
  }
  var ret = e.cloneNode(true);
  if (e.nodeType == Node.TEXT_NODE) {
    ret.textContent = jsprettify.prettifyStr(ret.textContent);
  } else {
    var curChildren = ret.childNodes;
    for (var i = 0; i < curChildren.length; i++) {
      ret.replaceChild(jsprettify.prettifyHtml(curChildren[i]),
          curChildren[i]);
    }
  }
  return ret;
};

window['prettify'] = function() {
  var es = goog.dom.$$('*', 'prettify');
  for (var i = 0; i < es.length; i++) {
    var pretty = jsprettify.prettifyHtml(es[i]);
    goog.dom.replaceNode(pretty, es[i]);
  }
};
