import {select} from "d3-selection";

function propertiesFunction(selection, map) {
  return selection.each(function() {
    var x = map.apply(this, arguments), s = select(this);
    for (var name in x) s.property(name, x[name]);
  });
}

function propertiesObject(selection, map) {
  for (var name in map) selection.property(name, map[name]);
  return selection;
}

export default function(map) {
  return (typeof map === "function" ? propertiesFunction : propertiesObject)(this, map);
}
