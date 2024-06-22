const HomePage = (props) => {

  if (props.loading) return <p>Loading...</p>;
  if (props.error) return <p>A network error was encountered</p>;

  return (
    <div>
      <h1>Home page!</h1>
      <article>
      {props.products.map((item)=>
        <div class="product" id={item.id}>
          <img src={item.image} height="200px"/>
            <h1>{item.title}</h1>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>{item.description}</p>
          <form onSubmit={props.pageToParent}>
            <label>QTY:</label>
            <input type="number" id={item.id} min={0} />
            <button type="submit">Add to Cart</button>
          </form>
      </div>
      )}
    </article>
    </div>
  );
};

export default HomePage;
