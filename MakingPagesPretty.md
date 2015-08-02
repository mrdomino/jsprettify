There are two ways you can go: either compile it yourself (in which case you’ll need to read about the DevEnvironment), or download [the most recent version of prettify-comp.js](http://code.google.com/p/jsprettify/downloads/list). In any event, this page will assume that there you have a copy of `prettify-comp.js` somewhere on your system.

You’ll need two script tags somewhere in your HTML `head` block — one to pull in the jsprettify source, and one to make it run when your document is loaded. They don’t have to necessarily be right after each other, but they should be in the order shown below:
```
<head>
[…]
<script src="jsprettify-comp.js"></script>
<script>
  window.jsprettify.run();
</script>
[…]
```

Now your document will be prettified when it is loaded. In order to make said prettification happen, you’re going to have to have some content to prettify. `jsprettify` prettifies any HTMLElements returned by `document.getElementsByClassName('prettify')`. So, add that class to any elements you want to look pretty, e.g.:
```
<body>
<div class="prettify">&quot;This text is pretty.&quot;
<p>&quot;This text is also pretty.&quot;</p>
</div>
<p>&quot;This text is ugly. :-(&quot;</p>
```

If you’re using Wordpress, Blogger, or similar, right now you’re going to have to get help from someone who’s savvy about editing templates in those systems. If you yourself are savvy about editing templates in those systems, please feel free to submit a guide!

Go forth, have fun, and enjoy.

## Using jsprettify with Hyphenator.js ##

[Hyphenator.js](http://code.google.com/p/hyphenator) is another JavaScript typographic package. This one automatically hyphenates your documents, making them use smart word wrapping when text is justified. Unfortunately, Hyphenator and jsprettify currently break when the latter is used as described here—see [Issue 28](http://code.google.com/p/jsprettify/issues/detail?id=28). The workaround described there is as follows:
<blockquote>
… remove this script block from the document head:<br>
<pre><code>&lt;script&gt;<br>
  window.jsprettify.run();<br>
&lt;/script&gt;<br>
</code></pre>
And add this as the very last element in the document body:<br>
<pre><code>&lt;script&gt;<br>
  window.jsprettify.prettify();<br>
&lt;/script&gt;<br>
</code></pre>
</blockquote>