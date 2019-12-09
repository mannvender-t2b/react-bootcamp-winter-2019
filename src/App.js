import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";

import LinearLayout from "./layouts/LinearLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          return (
            <Route key={route.path} exact={route.exact} path={route.path}>
              {route.layout === "linearLayout" ? (
                <LinearLayout {...route} />
              ) : (
                <DashboardLayout {...route} />
              )}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
