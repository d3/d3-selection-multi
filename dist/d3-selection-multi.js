(function(global) {
  "use strict";

  var namespace = d3.namespace;

  var selection_attrs = function(map) {
    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        name = namespace(name);
        if (value == null) {
          if (name.local) this.removeAttributeNS(name.space, name.local);
          else this.removeAttribute(name);
        } else {
          if (name.local) this.setAttributeNS(name.space, name.local, value);
          else this.setAttribute(name, value);
        }
      }
    });

    for (var name in map) {
      this.attr(name, map[name]);
    }

    return this;
  };

  var selection_styles = function(map, priority) {
    if (arguments.length < 2) priority = "";

    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        if (value == null) {
          this.style.removeProperty(name);
        } else {
          this.style.setProperty(name, value, priority);
        }
      }
    });

    for (var name in map) {
      this.style(name, map[name], priority);
    }

    return this;
  };

  var selection_properties = function(map) {
    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        if (value == null) {
          delete this[name];
        } else {
          this[name] = value;
        }
      }
    });

    for (var name in map) {
      this.property(name, map[name]);
    }

    return this;
  };

  var index_js = {

  };

  var selection = d3.selection;
  selection.prototype.attrs = selection_attrs;
  selection.prototype.styles = selection_styles;
  selection.prototype.properties = selection_properties;

  var object = global;
  object = object.d3 || (object.d3 = {});
  for (var name in index_js) object[name] = index_js[name];
  if (typeof define === "function" && define.amd) define(d3);
  else if (typeof module === "object" && module.exports) module.exports = d3;
})(typeof global === "undefined" ? this : global);
