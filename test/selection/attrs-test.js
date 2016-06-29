var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("d3-selection");

require("../../");

tape("selection.attrs sets attributes on selected elements", function(test) {
  var document = jsdom.jsdom();
  d3.select(document.body).attrs({foo: 42, bar: "BAR"});
  test.equal(document.body.getAttribute("foo"), "42");
  test.equal(document.body.getAttribute("bar"), "BAR");
  d3.select(document.body).attrs({foo: null});
  test.equal(document.body.hasAttribute("foo"), false);
  test.end();
});

tape("selection.attrs can take a function that returns an object", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1><h2>world</h2>"),
      h1 = document.querySelector("h1"),
      h2 = document.querySelector("h2");
  d3.selectAll([h1, h2]).attrs(function(d, i) { return !i ? {foo: 42} : {bar: "BAR"}; });
  test.equal(h1.getAttribute("foo"), "42");
  test.equal(h1.hasAttribute("bar"), false);
  test.equal(h2.hasAttribute("foo"), false);
  test.equal(h2.getAttribute("bar"), "BAR");
  test.end();
});

tape("selection.attrs can take an object with function values", function(test) {
  var document = jsdom.jsdom("<h1>hello</h1><h2>world</h2>"),
      h1 = document.querySelector("h1"),
      h2 = document.querySelector("h2");
  d3.selectAll([h1, h2]).attrs({
    foo: function(d, i) { return !i ? 42 : null; },
    bar: function(d, i) { return !i ? null : "BAR"; },
  });
  test.equal(h1.getAttribute("foo"), "42");
  test.equal(h1.hasAttribute("bar"), false);
  test.equal(h2.hasAttribute("foo"), false);
  test.equal(h2.getAttribute("bar"), "BAR");
  test.end();
});
