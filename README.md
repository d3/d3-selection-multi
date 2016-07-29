# d3-selection-multi

This module adds multi-value syntax to [selections](https://github.com/d3/d3-selection) and [transitions](https://github.com/d3/d3-transition), allowing you to set multiple attributes, styles or properties simultaneously with more concise syntax. For example:

```js
d3.select("body").append("div")
    .attrs({
      title: "A cheery, timeless greeting.",
      class: "greeting"
    })
    .text("Hello, world!");
```

This is equivalent to:

```js
d3.select("body").append("div")
    .attr("title", "A cheery, timeless greeting.")
    .attr("class", "greeting")
    .text("Hello, world!");
```

Like [*selection*.attr](https://github.com/d3/d3-selection#selection_attr), the values in the multi-value object can be functions of data:

```js
d3.select("body").append("div")
    .attrs({
      title: function(d) { return d.title; },
      id: function(d, i) { return "id-" + i; },
    });
```

Alternatively, you can pass a function which returns an object, allowing you to share some computational effort across multiple attributes, or to determine which attribute to set dynamically:

```js
d3.select("body").append("div")
    .attrs(function(d, i) { return {title: d.title, id: "id-" + i}; });
```

This module is not included in the [default D3 bundle](https://github.com/d3/d3) for parsimony’s sake: the single-value methods such as [*selection*.attr](https://github.com/d3/d3-selection#selection_attr) are recommended for most users, as there is little benefit to the shorter syntax provided by these convenience method.

## Installing

If you use NPM, `npm install d3-selection-multi`. Otherwise, download the [latest release](https://github.com/d3/d3-selection-multi/releases/latest) or load directly from [d3js.org](https://d3js.org) as a [standalone library](https://d3js.org/d3-selection-multi.v1.min.js). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-ease.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script src="https://d3js.org/d3-transition.v1.min.js"></script>
<script src="https://d3js.org/d3-selection-multi.v1.min.js"></script>
<script>

var div = d3.selectAll("div")
    .attrs({title: "Hello, world!"})
    .styles({"color": "red"});

</script>
```

Or, in combination with the [D3 default bundle](https://github.com/d3/d3):

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-selection-multi.v1.min.js"></script>
<script>

var div = d3.selectAll("div")
    .attrs({title: "Hello, world!"})
    .styles({"color": "red"});

</script>
```

[Try d3-selection-multi in your browser.](https://tonicdev.com/npm/d3-selection-multi)

## API Reference

<a name="selection_attrs" href="#selection_attrs">#</a> <i>selection</i>.<b>attrs</b>(<i>values</i>)

A convenience method on top of [*selection*.attr](https://github.com/d3/d3-selection#selection_attr) for setting multiple attributes. If the specified *values* is an object, the values may be specified either as strings or functions. For example:

```js
selection.attrs({foo: "foo-value", bar: function(d) { return d.bar; }});
```

If a value is a constant, all elements are given the same attribute value; otherwise, if a value is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s attribute. A null value will remove the specified attribute.

If the specified *values* is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value must be an object with string values, which are then used to set attributes on the current element. For example:

```js
selection.attrs(function(d) { return {foo: "foo-value", bar: d.bar}; });
```

Passing a function to *selection*.attrs is convenient for sharing some computational effort or state across multiple attributes, or for specifying dynamically which attributes to set.

<a name="selection_styles" href="#selection_styles">#</a> <i>selection</i>.<b>styles</b>(<i>values</i>[, <i>priority</i>])

A convenience method on top of [*selection*.style](https://github.com/d3/d3-selection#selection_style) for setting multiple style properties. If the specified *values* is an object, the values may be specified either as strings or functions. For example:

```js
selection.styles({fill: "red", stroke: function(d) { return d.stroke; }});
```

If a value is a constant, all elements are given the same style property value; otherwise, if a value is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s style properties. A null value will remove the specified style properties.

If the specified *values* is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value must be an object with string values, which are then used to set style properties on the current element. For example:

```js
selection.styles(function(d) { return {fill: "red", stroke: d.stroke}; });
```

Passing a function to *selection*.styles is convenient for sharing some computational effort or state across multiple style properties, or for specifying dynamically which style properties to set.

<a name="selection_properties" href="#selection_properties">#</a> <i>selection</i>.<b>properties</b>(<i>values</i>)

A convenience method on top of [*selection*.property](https://github.com/d3/d3-selection#selection_property) for setting multiple element properties. If the specified *values* is an object, the values may be specified either as strings or functions. For example:

```js
selection.properties({foo: "foo-value", id: function(d, i) { return "id-" + i; }});
```

If a value is a constant, all elements are given the same property value; otherwise, if a value is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value is then used to set each element’s properties. A null value will remove the specified properties.

If the specified *values* is a function, the function is evaluated for each selected element, in order, being passed the current datum (*d*), the current index (*i*), and the current group (*nodes*), with *this* as the current DOM element. The function’s return value must be an object with string values, which are then used to set properties on the current element. For example:

```js
selection.properties(function(d, i) { return {foo: "foo-value", id: "id-" + i}; });
```

Passing a function to *selection*.properties is convenient for sharing some computational effort or state across multiple properties, or for specifying dynamically which properties to set.

<a name="transition_attrs" href="#transition_attrs">#</a> <i>transition</i>.<b>attrs</b>(<i>values</i>)

Like [*selection*.attrs](#selection_attrs), but for [*transition*.attr](https://github.com/d3/d3-transition#transition_attr).

<a name="transition_styles" href="#transition_styles">#</a> <i>transition</i>.<b>styles</b>(<i>values</i>[, <i>priority</i>])

Like [*selection*.styles](#selection_styles), but for [*transition*.style](https://github.com/d3/d3-transition#transition_style).
