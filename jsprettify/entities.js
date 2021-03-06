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

goog.provide('jsprettify.entities');


/**
 * This object contains some common typographical HTML entities.
 * @type {Object.<string,string>}
 */
jsprettify.entities = {
  endash: '\u2013',
  emdash: '\u200a\u2014\u200a',
  lsquo:  '\u2018',
  rsquo:  '\u2019',
  ldquo:  '\u201c',
  rdquo:  '\u201d',
  hellip: '\u2026'
};
