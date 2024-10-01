import React, { useState } from "react";
import axios from "axios";

export default function PostCard({ post }: any) {
  const [numberOfPersons, setNumberOfPersons] = useState(1); // Add state for number of persons
  const [startDate, setStartDate] = useState(''); // Add state for start date
  const [endDate, setEndDate] = useState(''); // Add state for end date
  const userId = localStorage.getItem('userId'); // Retrieve the userId from localStorage

  // Function to add to cart
  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/proxy/User/AddToCart', null, {
        params: {
          packageId: post.packageId,
          numberOfPersons,
          startDate,
          endDate,
          userId
        }
      });
      alert(response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart.");
    }
  };

  // Function to add to watchlist
  const handleAddToWatchlist = async () => {
    try {
      const response = await axios.post('/proxy/User/AddToWatchlist', null, {
        params: {
          userId,
          packageId: post.packageId,
        }
      });
      alert(response.data);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
      alert("Failed to add to watchlist.");
    }
  };

  return (
    <div
      className={`active:scale-click group w-full sm:w-1/2 lg:w-1/3 xl:w-1/4`}
    >
      <div
        className={`mb-4 cursor-pointer rounded-lg bg-light shadow-md dark:bg-dark-card sm:mr-8 sm:mt-4`}
      >
        <div className="h-48 w-full overflow-hidden">
          <img
            src={`../src/assets${post.packageImage}`}
            alt={post.packageName}
            className={`sm:group-hover:scale-hover h-full w-full rounded-t-lg object-cover transition-transform ease-in-out`}
          />
        </div>
        <div className="p-3">
          <div className="mb-1 text-xs text-light-info dark:text-dark-info">
            {post.duration} days • ${post.finalPrice}
          </div>
          <div className="mb-1 text-xs text-light-info dark:text-dark-info">
            Accommodation: {post.accommodation ? 'Yes' : 'No'} • Flight: {post.flightBooking ? 'Yes' : 'No'} • Sightseeing: {post.sightseeing ? 'Yes' : 'No'}
          </div>
          <h2 className="mb-2 line-clamp-1 text-base font-semibold text-light-title dark:text-dark-title">
            {post.packageName}
          </h2>
          <p className="line-clamp-2 text-sm text-light-description dark:text-dark-description">
            {post.description}
          </p>
          <div className="mt-4 flex gap-2">
            Total Seats: {post.totalSeats}
          </div>

          {/* Inputs for number of persons, start date, and end date */}
          <div className="mt-4">
            <label>
              Number of Persons:
              <input
                type="number"
                value={numberOfPersons}
                onChange={(e) => setNumberOfPersons(Number(e.target.value))}
                min="1"
                className="ml-2 p-1 border rounded"
              />
            </label>
          </div>
          <div className="mt-2">
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="ml-2 p-1 border rounded"
              />
            </label>
          </div>
          <div className="mt-2">
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="ml-2 p-1 border rounded"
              />
            </label>
          </div>

          {/* Buttons for Add to Cart and Add to Watchlist */}
          <div className="mt-4 flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              onClick={handleAddToWatchlist}
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
