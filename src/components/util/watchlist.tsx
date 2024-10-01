import React, { useEffect, useState } from "react";
import axios from "axios";

interface PackageItem {
  packageId: number;
  packageName: string;
  finalPrice: number;
}

const WatchlistPage = () => {
  const [watchlistItems, setWatchlistItems] = useState<PackageItem[]>([]);
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
      .get(`/api/GetWatchlist?userId=${userId}`)
      .then((response) => {
        setWatchlistItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching watchlist:", error);
        setError("Failed to load watchlist items");
        setLoading(false);
      });
  }, [userId]);

  const removeFromWatchlist = (packageId: number) => {
    axios
      .delete(`/api/RemoveFromWatchlist`, { params: { userId, packageId } })
      .then(() => {
        setWatchlistItems((prevItems) =>
          prevItems.filter((item) => item.packageId !== packageId)
        );
      })
      .catch((error) => {
        console.error("Error removing item from watchlist:", error);
      });
  };

  if (loading) {
    return <p>Loading watchlist...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Your Watchlist</h1>
      {watchlistItems.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Final Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlistItems.map((item) => (
              <tr key={item.packageId}>
                <td>{item.packageName}</td>
                <td>${item.finalPrice.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => removeFromWatchlist(item.packageId)}
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

export default WatchlistPage;
