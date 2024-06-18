import ToolBar from "./components/ToolBar.jsx";

const CartPage = () => {
  return (
    <div>
      <ToolBar numItems={0}/>
      <h1>Hello from cart page!</h1>
      <button>Checkout & Pay</button>
    </div>
  );
};

export default CartPage;
