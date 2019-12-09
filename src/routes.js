import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: "linearLayout"
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    layout: "dashboardLayout"
  }
];
