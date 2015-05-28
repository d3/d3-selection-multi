import selection_attrs from "./src/selection_attrs";
import selection_styles from "./src/selection_styles";
import selection_properties from "./src/selection_properties";

var selection = d3.selection;
selection.prototype.attrs = selection_attrs;
selection.prototype.styles = selection_styles;
selection.prototype.properties = selection_properties;
