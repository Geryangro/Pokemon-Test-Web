import home from "../Page/Home";
import detail from "../Page/Page";

const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: home
  },
  {
    name: "detail",
    path: "/:name",
    exact: true,
    component: detail
  }
];

export default routes;
