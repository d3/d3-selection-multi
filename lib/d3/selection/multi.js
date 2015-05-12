module.exports = function(Selection) {
  var prototype = Selection.prototype;

  prototype.attrs = function(map) {
    if (typeof map === "function") return this.each(function() {
      var x = map.apply(this, arguments);
      for (var name in x) {
        var value = x[name];
        name = qualifyNamespace(name);
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

  prototype.styles = function(map, priority) {
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

  prototype.properties = function(map) {
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

  prototype.classes = function(map) {
    throw new Error("not yet implemented"); // TODO
  };

  prototype.ons = function(map, capture) {
    throw new Error("not yet implemented"); // TODO
  };

  return Selection;
};
