import { useParams } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage.jsx";
import CartPage from "./CartPage.jsx";
import ToolBar from "./components/ToolBar.jsx";
import useProductURL from "./useProductURL.jsx"

const Pages = () => {
  const { name } = useParams();

  const [numItems, setNumItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const { productData, error, loading } = useProductURL();

  const clearCart = () => {
    setCartItems([])
    setNumItems(0)
  }

  function handleDataToPages(e) {
    e.preventDefault();
    const count = Number(e.target[0].value)
    const id = Number(e.target[0].id);
    const cartInd = cartItems.findIndex(x => x[0] === id);
    if (cartInd != -1) {
      cartItems[cartInd][1] += count;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, [id, count]]);
    }
    setNumItems(numItems + count);
  }

  return (
    <div>
      <ToolBar numItems={numItems} />
      {name === "home" ? (
        <HomePage pageToParent={handleDataToPages} products={productData} loading={loading} error={error}/>
      ) : name === "cart" ? (
        <CartPage pageToParent={handleDataToPages} items={cartItems} products={productData} clearCart={clearCart}/>
      ) : (
        <HomePage pageToParent={handleDataToPages} products={productData} load={loading} error={error}/>
      )}
    </div>
  );
};

export default Pages;
