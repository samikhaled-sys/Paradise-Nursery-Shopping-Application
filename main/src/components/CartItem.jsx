import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Plant Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}>
                  <td>
                    <img src={item.image} alt={item.name} width="60" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Total Amount: ${totalAmount}</h2>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => alert("Checkout Coming Soon!")}>
              Checkout
            </button>

            <Link to="/plants" style={{ marginLeft: "20px" }}>
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
