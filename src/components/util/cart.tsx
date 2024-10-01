import React, { useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  packageId: number;
  packageName: string;
  finalPrice: number;
  numberOfPersons: number;
  startDate: string;
  endDate: string;
  totalCost: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    axios
      .get(`/api/GetCart?userId=${userId}`)
      .then((response) => {
        setCartItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setError("Failed to load cart items");
        setLoading(false);
      });
  }, [userId]);

  const removeFromCart = (packageId: number) => {
    axios
      .delete(`/api/RemoveFromCart`, { params: { userId, packageId } })
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.packageId !== packageId)
        );
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  if (loading) {
    return <p>Loading cart items...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Number of Persons</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.packageId}>
                <td>{item.packageName}</td>
                <td>{item.numberOfPersons}</td>
                <td>{new Date(item.startDate).toLocaleDateString()}</td>
                <td>{new Date(item.endDate).toLocaleDateString()}</td>
                <td>${item.totalCost.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => removeFromCart(item.packageId)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartPage;
