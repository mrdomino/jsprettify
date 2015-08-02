# Introduction #

In order to do smart quotes, we need to somehow match pairs of quotes. Greedy replacement is hopelessly inadequate, matching alternates doesn't handle nesting, and regexps are computationally expensive. By comparison, a recursive descent parser for the language of matched quotes is relatively simple to write, should perform well, and can be interrupted and resumed to allow for arbitrary changes to a document without having to re-prettify it from the start.

# Algorithm #

At a high level, the algorithm should look roughly like this:
```
function parseQuoted(s) {
  try {
    return parseSingleQuoted(s);
  } catch(e) {
    return parseDoubleQuoted(s);
  }
};

function parseSingleQuoted(s) {
  return [parseOpenSingleQuote, parseDoubleQuoted, parseCloseSingleQuote].parse(s);
};

function parseDoubleQuoted(s) {
  return [parseOpenDoubleQuote, parseSingleQuoted, parseCloseDoubleQuote].parse(s);
};
```

To parse a quoted expression, we parse either a double-quoted or a single-quoted expression (assuming the two are mutually exclusive). To parse a double-quoted (single-quoted) expression, we parse an open double quote, then a single-quoted expression, then a close double quote.

## Stack-based Implementation ##

The actual implementation is likely to use a stack instead of a recursive algorithm in order to allow it to be more easily interrupted and resumed at different stages in the computation. A stack argument will be passed to the parse functions, which will embed stack states in the DOM elements that they parse. Pseudocode follows:

```
function prettifyHtml(elem, opt_stack) {
  var stack = opt_stack || lookUpPriorStackState(elem);
  stack = prettifyTextContent(elem, stack);
  elem.jsprettify_stack = stack;
  forEach(elem.children, function(child) {
    stack = prettifyHtml(child, stack);
  });
  return stack;
};

function prettifyTextContent(elem, opt_stack) {
  if (stack.top() == DOUBLE_QUOTED) {
    stack = parseSingleQuoted(elem, stack);
  } else {
    stack = parseDoubleQuoted(elem, stack);
  }
  return stack;
};
```

The key points are that the stack information is stored in DOM nodes as the parse progresses, and that `prettifyHtml` tries to look up prior stack information prior to prettifying an element. This glosses over many details, but gives a general idea of how the algorithm will work.