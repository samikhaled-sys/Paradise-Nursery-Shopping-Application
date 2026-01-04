import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantsData = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Rubber Plant", price: 20, image: "https://via.placeholder.com/150" },
    { id: 6, name: "ZZ Plant", price: 22, image: "https://via.placeholder.com/150" },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 8, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Lavender", price: 9, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Hibiscus", price: 14, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Bougainvillea", price: 16, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Jasmine", price: 11, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Geranium", price: 7, image: "https://via.placeholder.com/150" },
  ],
  Succulents: [
    { id: 13, name: "Echeveria", price: 6, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Haworthia", price: 7, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Jade Plant", price: 9, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Cactus", price: 5, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Sedum", price: 6, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Crassula", price: 8, image: "https://via.placeholder.com/150" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/plants">Plants</Link> |{" "}
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          🛒 Cart ({totalQuantity})
        </div>
      </nav>

      <h1>Our Plants</h1>

      {Object.keys(plantsData).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plantsData[category].map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "150px",
                }}
              >
                <img src={plant.image} alt={plant.name} width="100%" />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
