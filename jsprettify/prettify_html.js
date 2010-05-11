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

goog.provide('jsprettify.prettifyHtml');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('jsprettify.prettifyStr');


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
  if (e.nodeType == goog.dom.NodeType.TEXT) {
    ret.data = jsprettify.prettifyStr(ret.data);
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
