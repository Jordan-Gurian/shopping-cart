import AllProducts from "./components/AllProducts.jsx"

const HomePage = (props) => {

  const handleDataToParent = (e) => {
    e.preventDefault();
    props.pageToParent(Number(e.target[0].value));
  }

  return (
    <div>
      <h1>Hello from home page!</h1>
        <AllProducts childToParent={handleDataToParent} />
    </div>
  );
};

export default HomePage;
