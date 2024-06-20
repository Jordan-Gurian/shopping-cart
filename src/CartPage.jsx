import useProductURL from "./useProductURL.jsx"

const CartPage = (props) => {

  const products = props.products;

  return (
    <div>
      <h1>Hello from cart page!</h1>
      {props.items.map((item)=>      
        <div class="product" id={products[products.findIndex(x => x.id === item[0])].id}>
        <img src={products[products.findIndex(x => x.id === item[0])].image} height="200px"/>
          <h1>{products[products.findIndex(x => x.id === item[0])].title}</h1>
          <p>Price: ${products[products.findIndex(x => x.id === item[0])].price * item[1]}</p>
          <p>QTY: {item[1]}</p>
        </div>
      )}
      <button>Checkout & Pay</button>
    </div>
  );
};

export default CartPage;
