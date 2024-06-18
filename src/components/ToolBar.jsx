import { Link, useNavigate } from 'react-router-dom';


const ToolBar = (props) => {

  return(
    <nav>
      <ul>
        <li>
          <Link to="/home">Home page</Link>
        </li>
        <li>
          <Link to="/cart">Cart page</Link>
        </li>
        <li>
          <p>Total items: {props.numItems}</p>
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;