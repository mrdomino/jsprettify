# Introduction #

This bookmarklet, when clicked, goes through all text inputs on a page, replacing keyboard shorthand ("", '', --, and ---) with proper Unicode characters (“”, ‘’, –, and —). Not only do these look better than their alternatives, but the dashes count for fewer characters in space-constrained formats like Twitter.

# Usage #

Drag this bookmarklet into your browser’s bookmarks bar:
&lt;wiki:gadget url="http://jsprettify.googlecode.com/hg/gadgets/bookmarklet\_gadget.xml" height="25" width="100" border="0"/&gt;

Then, go to wherever you’d like to enter pretty text, and type your message like normal. Before you send it, click on the bookmarklet. Finally, go ahead and send your prettified message to the internet.

It’s recommended that you join the [jsPrettify bookmarklet mailing list](http://groups.google.com/group/jsprettify-bookmarklet) to stay up to date with new versions and bug fixes. It’s a low-traffic announcement list that consists only of information about new bookmarklet versions; I won’t ever spam you.

## Browser integration ##

Having to move the mouse and click on a button every time you want to send a message is suboptimal. Fortunately, you can make a keyboard shortcut for jsPrettify in all of the major browsers. In Chrome, install the [Shortcut Manager extension](https://chrome.google.com/extensions/detail/mgjjeipcdnnjhgodgjpfkffcejoljijf) and copy/paste the bookmarklet Javascript code into it. In Firefox, check out the [SiteLauncher addon](https://addons.mozilla.org/en-US/firefox/addon/10127). In Safari, just drag the bookmarklet to slot 1–10 and access it with ⌘-1–0. In Opera, assign the bookmarklet a shortcut, select the address bar, and enter it. Done.

# Details #

Here’s how the bookmarklet works: first, it writes a new `script` tag into the page you’re on, linking to a specific copy of `prettify-comp.js` hosted from Google App Engine. This provides the `window.prettifyTextInputs` function, which is used to prettify your input fields. The only machines involved are yours and Google’s, and all text transformations take place on your own machine; none of your text is ever sent to me or Google.

Depending on how much you trust me, you may want to modify the bookmarklet to point at a copy of `prettify-comp.js` hosted elsewhere (e.g. on your own server.) You can easily do so by downloading the source, editing `bookmarklet.js`, rerunning `build.py` and `bookmarklet.sh`, and copying the bookmarklet from `bookmarklet.html`.

## More details ##

The prettify script will continue to evolve over time, but particular versions of the bookmarklet will always point to specific historic versions of the script. Thus, if the bookmarklet works for you now, it should always work, no matter what I do to the mainline version. This also means that for now, you have to manually upgrade the bookmarklet to take advantage of new features and bugfixes; hopefully, this will change in the future.