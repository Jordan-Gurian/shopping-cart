import { Link, useNavigate } from 'react-router-dom';


const ToolBar = () => {

  return(
    <nav>
      <ul>
        <li>
          <Link to="/home">Home page</Link>
        </li>
        <li>
          <Link to="/cart">Cart page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;