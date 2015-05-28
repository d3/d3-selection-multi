export default function(map) {
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
