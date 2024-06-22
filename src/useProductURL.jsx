import { useState, useEffect } from "react";

const useProductURL = () => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products/";
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        response.map((item) => item.price = Number(item.price).toFixed(2));
        setProductData(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productData, error, loading };
};

export default useProductURL