#!/bin/sh

perl make_bookmarklet.pl bookmarklet-comp.js > bookmarklet-tmp.js 2>/dev/null

bm=`head -n1 bookmarklet-tmp.js | cut -c4-`

cat <<EOF >gadgets/bookmarklet.html
<!doctype html>
<title>Prettify Bookmarklet</title>
<p><a href="${bm}" title="jsprettify bookmarklet">Prettify Inputs</a>
EOF

rm bookmarklet-tmp.js
