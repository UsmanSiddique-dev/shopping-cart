import React from "react";
import { useCart } from "../context/CartContext";
export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className="container">
      <h2 className="mb-3">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td style={{ width: "100px" }}>
                    <input
                      className="form-control text-center"
                      min="1"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end fw-bold fs-5">
            Total :${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
