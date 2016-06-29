import {select} from "d3-selection";

function attrsFunction(transition, map) {
  return transition.each(function() {
    var x = map.apply(this, arguments), t = select(this).transition(transition);
    for (var name in x) t.attr(name, x[name]);
  });
}

function attrsObject(transition, map) {
  for (var name in map) transition.attr(name, map[name]);
  return transition;
}

export default function(map) {
  return (typeof map === "function" ? attrsFunction : attrsObject)(this, map);
}
