import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "../../routes";
import ThemeContextWrapper from "components/theme/themeWrapper";
import ThemePlugin from "components/plugins/theme/theme.plugin";


var ps;

function Admin(props) {
  const mainPanelRef = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
        <React.Fragment>
            <div ref={mainPanelRef}> {/* data={color} */}
              {/* <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/admin/dashboard" />
              </Switch> */}
            </div>
          <ThemePlugin />
        </React.Fragment>
  );
}

export default Admin;
