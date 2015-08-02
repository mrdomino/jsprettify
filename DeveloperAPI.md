# Introduction #

There are two ways to use jsPrettify: either pull in the sources with Closure (recommended if you're using the Closure Library or Closure compiler), or include the precompiled [jsprettify-all.js](https://code.google.com/p/jsprettify/downloads/detail?name=jsprettify-all-latest.js) in your code somehow. In the former case, you can either pull in all of jsPrettify by calling `goog.require('jsprettify')`, or pull in just what you desire by calling `goog.require('jsprettify.foo')`; see [the source](https://code.google.com/p/jsprettify/source/browse/jsprettify) for more details. In the latter case, all functions are placed under `window.jsprettify`, so e.g. `jsprettify.prettifyStr` is accessible via `window.jsprettify.prettifyStr`.

```
TODO: generate docs via JSDoc or otherwise describe the API.
```