import {select} from "d3-selection";

function stylesFunction(transition, map, priority) {
  return transition.each(function() {
    var x = map.apply(this, arguments), t = select(this).transition(transition);
    for (var name in x) t.style(name, x[name], priority);
  });
}

function stylesObject(transition, map, priority) {
  for (var name in map) transition.style(name, map[name], priority);
  return transition;
}

export default function(map, priority) {
  return (typeof map === "function" ? stylesFunction : stylesObject)(this, map, priority == null ? "" : priority);
}
