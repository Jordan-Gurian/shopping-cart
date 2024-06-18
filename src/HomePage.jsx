import { useParams } from "react-router-dom";
import ToolBar from "./components/ToolBar.jsx"

const HomePage = () => {
  const { name } = useParams();

  return (
    <div>
      <ToolBar />
      <h1>Hello from home page!</h1>
    </div>
  );
};

export default HomePage;
