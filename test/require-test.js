var tape = require("tape"),
    path = require("path"),
    d3 = require("d3-selection"),
    requirejs = require("requirejs");

require("../");

tape("can load as a CommonJS module", function(test) {
  test.equal(typeof d3.selection.prototype.attrs, "function");
  test.end();
});

tape("can load as AMD module", function(test) {
  delete global.d3;
  requirejs([path.join(__dirname, "../node_modules/d3-selection/d3-selection")], function(d3) {
    requirejs([path.join(__dirname, "../d3-selection-multi")], function() {
      test.equal(typeof d3.selection.prototype.attrs, "function");
      test.end();
      global.d3 = d3;
    });
  });
});

tape("can load as minified AMD module", function(test) {
  delete global.d3;
  requirejs([path.join(__dirname, "../node_modules/d3-selection/d3-selection.min")], function(d3) {
    requirejs([path.join(__dirname, "../d3-selection-multi.min")], function() {
      test.equal(typeof d3.selection.prototype.attrs, "function");
      test.end();
      global.d3 = d3;
    });
  });
});
