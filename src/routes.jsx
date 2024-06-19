import App from "./App";
import ErrorPage from "./ErrorPage";
import Pages from "./Pages";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:name",
    element: <Pages />,
  },
];

export default routes;
