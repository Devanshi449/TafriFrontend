import { useEffect, useState } from "react";
import Packages from "./Packages";

interface User {
    packageId: number;
    supplierId: number;
    duration: number;
    packageName: string;
    description: string;
    flightBooking: boolean;
    accommodation: boolean;
    sightseeing: boolean;
    luxuryFacilities: string;
    availableCount: number;
    supplierPrice: number;
    isPublic: boolean;
    createdAt: string;
    finalPrice: number;
    totalSeats: number;
    packageImage: string;
    destination: string;
}

export default function BlogFeed() {
  const [userData, setUserData] = useState<User[]>([]); 

useEffect(() => {
  fetch("/proxy/User/GetData", {
    method: "GET",
headers: {
  "Accept": "text/plain",
},
  })
    .then((response) => response.json())
    .then((data) => {
      setUserData(data)
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
}, []) 

  return (
    <div className="mx-auto my-6">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full p-4 sm:w-2/3">
          <div className="-mb-1 cursor-text text-base tracking-wide text-slate-500 dark:text-dark-tertiary">
            What's hot?
          </div>
          <h1 className="mb-2 cursor-text text-xl font-semibold dark:text-dark-primary">
              Featured Posts
          </h1>
          <div className="flex flex-col gap-6">
          {userData.length === 0 ? (
            <div className="w-full text-center text-lg font-semibold text-red-500">
              No packages available.
            </div>
          ) : (
            userData.map((post) => <Packages key={post.packageId} post={post} />)
          )}
          </div>
        </div>
        <div className="w-full p-4 sm:w-1/3">
          <div className="mb-6">
            <div className="-mb-1 cursor-text text-base tracking-wide text-light-tertiary dark:text-dark-tertiary">
              Discover by topic
            </div>
            <h2 className="mb-2 cursor-text text-xl font-semibold dark:text-dark-primary">
              Categories
            </h2>
            
          </div>
          <div>
            <div className="-mb-1 cursor-text text-base tracking-wide text-slate-500 dark:text-dark-tertiary">
              What's new?
            </div>
            <h2 className="mb-2 cursor-text text-xl font-semibold dark:text-dark-primary">
              Latest Posts
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}
