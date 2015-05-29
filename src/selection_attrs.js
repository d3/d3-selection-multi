import {namespace} from "d3-selection";

export default function(map) {
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
