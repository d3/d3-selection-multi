import {selection} from "d3-selection";
import selection_attrs from "./src/selection/attrs";
import selection_styles from "./src/selection/styles";
import selection_properties from "./src/selection/properties";

selection.prototype.attrs = selection_attrs;
selection.prototype.styles = selection_styles;
selection.prototype.properties = selection_properties;
