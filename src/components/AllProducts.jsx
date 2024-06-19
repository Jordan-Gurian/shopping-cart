import useProductURL from "../useProductURL.jsx"

const AllProducts = (props) => {

  const { productData, error, loading } = useProductURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return(
    <article>
      {productData.map((item)=>
        <div>
          <img src={item.image} height="200px"/>
            <h1>{item.title}</h1>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>{item.description}</p>
          <form onSubmit={props.childToParent}>
            <label>QTY:</label>
            <input type="number" />
            <button type="submit">Add to Cart</button>
          </form>
      </div>
      )}
    </article>
  );
};

export default AllProducts;