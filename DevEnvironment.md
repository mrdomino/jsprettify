# Dependencies #

This project depends on Google's [Closure Library](http://closure-library.googlecode.com/) and, for compilation, the [Closure Compiler](http://closure-compiler.googlecode.com/). In order to satisfy the former dependency, make sure that `../closure-library` (relative to the root of your copy of the jsPrettify source) is either a checked out copy of the Closure Library or a symlink to one. For the latter, make sure that `../closure-compiler/compiler.jar` is the jar file contained in [compiler-latest.zip (download link)](http://closure-compiler.googlecode.com/files/compiler-latest.zip) on the compiler download page.

With these dependencies satisfied, you should be able to load the file `all_tests.html` in a browser and press "Start" to run them all. If most or all of the tests fail, you've probably got something misconfigured; double-check everything and try again. If you're 100% certain that everything's in the right place and it's still failing, [file a bug](http://code.google.com/p/jsprettify/issues/entry).

In order to rebuild the bookmarklet, you'll need Perl and (currently) `/bin/sh` (sorry Windows users).

# Building the Source #

Run `make all` to rebuild everything; results will show up under `build/`.

# Project Layout #

## Directory structure ##

| **Directory** | **Description** |
|:--------------|:----------------|
| `build/`      | Compiler output |
| `gadgets/`    | Gadgets for [the example code on the front page](http://jsprettify.googlecode.com/hg/gadgets/example.html) and [the bookmarklet](MakingInputsPretty.md) |
| `jsprettify/` | The actual source code |
| `test/`       | Test files for all of the functions in `prettify.js` |

## Important files ##

| **Filename** | **Description** |
|:-------------|:----------------|
| `exports/all.js` | The source file that builds `jsprettify-all.js` |
| `exports/bm.js` | The source file that builds the file loaded by the bookmarklet |
| `exports/bookmarklet.js` | The source to the actual bookmarklet code |
| `gadgets/bookmarklet.html` | The compiled bookmarklet |
| `alltests.js` | A list of all test code; update it if you add a new test file! |
| `bookmarklet.sh` | The script to run to rebuild the bookmarklet file |
| `genjsdeps.py` | A script to update the dependency file `deps.js` |