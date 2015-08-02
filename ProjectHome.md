jsPrettify converts plain ASCII punctuation characters into “smart” Unicode typographic characters. It’s written in Javascript, so you can use it virtually anywhere online, either to clean up your own outgoing text before it’s sent or to prettify sites you host or visit.

jsPrettify performs the following transformations:
  * Straight quotes ("" and '') are converted into curly quotes (“” and ‘’).
  * Hyphen-dashes (“---” and “--”) are converted to em- and en-dashes (“—” and “–”).
  * Three dots (“...”) are converted to a horizontal ellipsis character (“…”).

Check out a [live demo](http://jsprettify.googlecode.com/hg/gadgets/example.html):
&lt;wiki:gadget url="http://jsprettify.googlecode.com/hg/gadgets/example\_gadget.xml" border="0" height="100"/&gt;

Read about
  * MakingInputsPretty — by using the bookmarklet, or
  * MakingPagesPretty — by embedding the source in your blog.

jsPrettify can work on strings or on HTML <a href='http://www.w3.org/DOM/'>DOM</a> elements. Because it works in your browser, it doesn’t have to parse HTML; it just walks the pre-existing DOM structure. Because it’s written using [Google Closure](http://code.google.com/closure), it’s extremely likely to work in your browser—I’ve personally tested it in Google Chrome, Firefox 3+, and IE6+.

If you use jsPrettify, show your support by adding it to your stack on Ohloh!
&lt;wiki:gadget url="http://www.ohloh.net/p/482111/widgets/project\_users\_logo.xml" height="43" border="0"/&gt;