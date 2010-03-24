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

goog.provide('jsprettify.entities');
goog.provide('jsprettify.prettifyHtml');
goog.provide('jsprettify.prettifyStr');
goog.provide('window.prettify');

goog.require('goog.array');
goog.require('goog.dom');


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
   * This array holds entries consisting of patterns and replacements in the
   * order that they are to be applied. We need to preserve order, since e.g.
   * if -- were replaced before ---, disaster would ensue.
   * @type {Array.<{pattern: string, replace: string}>}
   */
  var subs = [
    {pattern: '\\.\\.\\.',         replace: e.hellip},
    {pattern: "(^|[\\s\"])'",      replace: '$1' + e.lsquo},
    {pattern: '(^|[\\s-])"',       replace: '$1' + e.ldquo},
    {pattern: '---',               replace: e.emdash},
    {pattern: '--',                replace: e.endash},
    {pattern: "'($|[\\s\"])?",     replace: e.rsquo + '$1'},
    {pattern: '"($|[\\s.,;:?!])',  replace: e.rdquo + '$1'}
  ];
  goog.array.forEach(subs, function(sub) {
    var pattern = new RegExp(sub['pattern'], 'g');
    var replace = sub['replace'];
    text = text.replace(pattern, replace);
  });
  return text;
};

/**
 * Prettifies HTML Nodes by recursively prettifying their child text nodes.
 * This function operates nondestructively -- a prettified HTML fragment is
 * returned, and can replace the existing one to prettify a document.
 * @param {Node|null} e Node to start prettifying.
 * @param {{uglyTags: Array.<string>, uglyClass: string}} opt_args Optional
 *     arguments to customize the behavior of the function. 'uglyTags' is an
 *     array of tagnames not to prettify. 'uglyClass' is a string consisting
 *     of the class not to prettify.
 * @return {Node|null} Prettified version of the passed node.
 */
jsprettify.prettifyHtml = function(e, opt_args) {
  var args = opt_args || {};
  var uglyTags = args['uglyTags'] || [];
  var uglyClass = args['uglyClass'] || '';
  if (e == null) {
    return null;
  }
  var ret = e.cloneNode(true);
  if (e.nodeType == Node.TEXT_NODE) {
    goog.dom.setTextContent(ret,
        jsprettify.prettifyStr(goog.dom.getTextContent(ret)));
  } else if (! goog.array.contains(uglyTags, e.nodeName.toLowerCase()) &&
      ! (e.className && e.className == uglyClass)) {
    var curChildren = ret.childNodes;
    for (var i = 0; i < curChildren.length; i++) {
      goog.dom.replaceNode(jsprettify.prettifyHtml(curChildren[i], opt_args),
          curChildren[i]);
    }
  }
  return ret;
};

/**
 * Auto-prettify everything with classname 'prettify' in a document. This can
 * be used in e.g. a window.onload function to automatically prettify all text
 * when the window has loaded.
 */
window['prettify'] = function() {
  var es = goog.dom.$$(null, 'prettify');
  var opts = {'uglyTags': ['code', 'pre'], 'uglyClass': 'keepugly'};
  for (var i = 0; i < es.length; i++) {
    goog.dom.replaceNode(jsprettify.prettifyHtml(es[i], opts), es[i]);
  }
};
