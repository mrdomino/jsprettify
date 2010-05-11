#!/bin/bash

TODAY=`date +%Y%m%d`
projdir=$PWD

echo -n 'Username: '
read username
echo -n 'Password: '
stty -echo
read password
stty echo

make all

cp build/bm.js deploy/bm-${TODAY}.js
cp build/all.js deploy/jsprettify-all-${TODAY}.js
cp build/all.js deploy/jsprettify-all-latest.js

pushd deploy

googlecode_upload.py \
    --summary='Compiled script to auto-prettify items with className "prettify"' \
    --project='jsprettify' \
    --labels='Type-Source' \
    --user="$username" \
    --password="$password" \
    jsprettify-all-${TODAY}.js

googlecode_upload.py \
    --summary='Compiled script to auto-prettify items with className "prettify"' \
    --project='jsprettify' \
    --labels='Featured,Type-Source' \
    --user="$username" \
    --password="$password" \
    jsprettify-all-latest.js

googlecode_upload.py \
    --summary='Script loaded by bookmarklet to prettify text inputs' \
    --project='jsprettify' \
    --labels='Type-Source' \
    --user="$username" \
    --password="$password" \
    bm-${TODAY}.js

cp jsprettify-all-${TODAY}.js ../../static-smartercode/static/js
ln -sf jsprettify-all-${TODAY}.js ../../static-smartercode/static/js/jsprettify-all.js

cp bm-${TODAY}.js ../../cannytrousers/static/js
ln -sf bm-${TODAY}.js ../../cannytrousers/static/js/bm.js
