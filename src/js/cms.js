import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import SidebarPreview from "./cms-preview-templates/sidebar";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("Sidebar", SidebarPreview);
CMS.init();
