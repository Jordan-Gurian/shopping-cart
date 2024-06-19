import { useParams } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage.jsx";
import CartPage from "./CartPage.jsx";
import ToolBar from "./components/ToolBar.jsx";

const Pages = () => {
  const { name } = useParams();

  const [numItems, setNumItems] = useState(0);

  function handleDataToPages(count) {
    setNumItems(numItems + count);
  }

  return (
    <div>
      <ToolBar numItems={numItems} />
      {name === "home" ? (
        <HomePage pageToParent={handleDataToPages}/>
      ) : name === "cart" ? (
        <CartPage pageToParent={handleDataToPages}/>
      ) : (
        <HomePage pageToParent={handleDataToPages}/>
      )}
    </div>
  );
};

export default Pages;
