import { useParams } from "react-router-dom";
import { useState } from  "react";
import ToolBar from "./components/ToolBar.jsx"
import Apple from "./components/Apple.jsx"

const HomePage = () => {

  const [numItems, setNumItems] = useState(0);

  const handleDataToParent = (e) => {
    e.preventDefault();
    setNumItems(numItems + Number(e.target[0].value));
  }

  return (
    <div>
      <ToolBar numItems={numItems}/>
      <h1>Hello from home page!</h1>
      <Apple childToParent={handleDataToParent} />
    </div>
  );
};

export default HomePage;
