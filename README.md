# d3-selection-multi

Multi-value map syntax for [selections](https://github.com/d3/d3-selection) and [transitions](https://github.com/d3/d3-transition).

## Installing

If you use NPM, `npm install d3-selection-multi`. Otherwise, download the [latest release](https://github.com/d3/d3-selection-multi/releases/latest) or load directly from [d3js.org](https://d3js.org) as a [standalone library](https://d3js.org/d3-selection-multi.v0.4.min.js). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v1.min.js"></script>
<script src="https://d3js.org/d3-ease.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://d3js.org/d3-timer.v1.min.js"></script>
<script src="https://d3js.org/d3-transition.v1.min.js"></script>
<script src="https://d3js.org/d3-selection-multi.v0.4.min.js"></script>
<script>

var div = d3.selectAll("div")
    .attrs({"title": "Hello, world!"})
    .styles({"color": "red"});

</script>
```

Or, to use the [D3 default bundle](https://github.com/d3/d3):

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-selection-multi.v0.4.min.js"></script>
<script>

var div = d3.selectAll("div")
    .attrs({"title": "Hello, world!"})
    .styles({"color": "red"});

</script>
```

[Try d3-selection-multi in your browser.](https://tonicdev.com/npm/d3-selection-multi)

## API Reference

<a name="selection_attrs" href="#selection_attrs">#</a> <i>selection</i>.<b>attrs</b>(<i>object</i>)

…

<a name="selection_styles" href="#selection_styles">#</a> <i>selection</i>.<b>styles</b>(<i>object</i>)

…

<a name="selection_properties" href="#selection_properties">#</a> <i>selection</i>.<b>properties</b>(<i>object</i>)

…

<a name="transition_attrs" href="#transition_attrs">#</a> <i>transition</i>.<b>attrs</b>(<i>object</i>)

…

<a name="transition_styles" href="#transition_styles">#</a> <i>transition</i>.<b>styles</b>(<i>object</i>)

…
