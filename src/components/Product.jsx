import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Product.css";
export default function Product() {
  const { user, products, setProducts, cart, setCart } = useContext(AppContext);
  // const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const fetchProducts = async () => {
    const res = await axios.get(`https://gcet-node-app-five.vercel.app/products/all`);
    setProducts(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
        const existingItem = cart.find(item => item._id === product._id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
};
  return (
    <div>
      <h3>Welcome {user.name}! </h3>
      <div className="App-Product-Row">
        {products &&
          products.map((value) => (
            <div key={value._id}>
              <h3>{value.name}</h3>
              <h4>{value.price}</h4>
              <button onClick={() => addToCart(value)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}