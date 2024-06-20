import { Link, useNavigate } from 'react-router-dom';


const ToolBar = (props) => {

  return(
    <nav>
        <Link to="/home">Home page</Link>
        <Link to="/cart">Cart page</Link>
        <div>Total items: {props.numItems}</div>
    </nav>
  );
};

export default ToolBar;