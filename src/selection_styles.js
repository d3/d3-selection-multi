export default function(map, priority) {
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
