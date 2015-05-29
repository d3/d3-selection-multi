import {selection} from "d3-selection";
import selection_attrs from "./src/selection_attrs";
import selection_styles from "./src/selection_styles";
import selection_properties from "./src/selection_properties";

selection.prototype.attrs = selection_attrs;
selection.prototype.styles = selection_styles;
selection.prototype.properties = selection_properties;
