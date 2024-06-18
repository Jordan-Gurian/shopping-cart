import { useState } from "react";

const Apple = (props) => {

  const [data, setData] = useState(0);

  const handleChange = (e) => {
    setData(e.target.value)
  }

  return(
    <form onSubmit={props.childToParent}>
      <label>Apple QTY:</label>
      <input type="number" value={data} onChange={handleChange} />
      <button type="submit">Add to Cart</button>

    </form>
  );
};

export default Apple;