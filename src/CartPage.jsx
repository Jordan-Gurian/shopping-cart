import { useParams } from "react-router-dom";
import ToolBar from "./components/ToolBar.jsx";

const CartPage = () => {
  const { name } = useParams();

  return (
    <div>
      <ToolBar />
      <h1>Hello from cart page!</h1>
    </div>
  );
};

export default CartPage;
