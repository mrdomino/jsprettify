COMPILER_JAR=../closure-compiler/compiler.jar
CLOSURE_DIR=../closure-library/closure
CALCDEPS=$(CLOSURE_DIR)/bin/calcdeps.py
CALCDEPS_FLAGS=-o compiled --compiler_jar=$(COMPILER_JAR) -p $(CLOSURE_DIR) -p . \
               -f --compilation_level=ADVANCED_OPTIMIZATIONS \
               -f --warning_level=VERBOSE \
               -f '--output_wrapper="(function(){%output%})()"'
EXPORT_FILES=bm.js bookmarklet.js run.js all.js prettify.js

all: dirs _build

dirs: build

deps.js: exports/* build/* clean
	./genjsdeps.py

build:
	mkdir build

_build: $(foreach file, $(EXPORT_FILES), build/$(file)) gadgets/bookmarklet.html

clean:
	@rm -vf $(foreach file, $(EXPORT_FILES), build/$(file))

build/%: exports/%
	$(CALCDEPS) $(CALCDEPS_FLAGS) -i $^ --output_file=$@

gadgets/bookmarklet.html: build/bookmarklet.js
	./bookmarklet.sh

# TODO: generate this automatically {{{1

exports/bm.js: jsprettify/prettify_text_inputs.js

exports/all.js: jsprettify/*.js

exports/prettify.js: jsprettify/prettify.js

exports/run.js: jsprettify/run.js

jsprettify/jsprettify.js: jsprettify/run.js jsprettify/prettify_text_inputs.js

jsprettify/prettify_html.js: jsprettify/prettify_str.js

jsprettify/prettify.js: jsprettify/prettify_html.js

jsprettify/prettify_str.js: jsprettify/entities.js

jsprettify/prettify_text_inputs.js: jsprettify/prettify_str.js

jsprettify/run.js: jsprettify/prettify.js

# vim:fdm=marker
