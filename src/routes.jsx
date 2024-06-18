import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import CartPage from "./CartPage";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];

export default routes;
