import { useEffect, useState } from 'react';
// import BlogFeed from '@/components/blog-feed';
// import PostCard from '@/components/post-card';
// import Post from '@/types/post-type';
// import { PostCardSkeleton } from '@/components/skeletons/post-card-skeleton';
import Header from './parts/Header';
import BlogFeed from './parts/BlogFeed';
import PostCard from './parts/PostCard';
// import axiosInstance from '@/helpers/axios-instance';


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

function HomePage() {
    const [userData, setUserData] = useState<User[]>([]); 

    useEffect(() => {
      // Call the API when the component is mounted
      fetch("/proxy/User/GetData", {
        method: "GET",
    headers: {
      "Accept": "text/plain",
    },
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched data
          setUserData(data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
        })
    }, []) // Empty dependency array ensures it runs only once when component is mounted
  

  return (
    <div className="w-full cursor-default bg-light dark:bg-dark">
      <Header />
      <div className="mx-4 sm:mx-8 lg:mx-16">
        <BlogFeed />
        <h1 className="cursor-text pb-4 text-xl font-semibold dark:text-dark-primary sm:pb-0">
          All Posts
        </h1>
        <div className="flex flex-wrap">
        {userData.length === 0 ? (
            <div className="w-full text-center text-lg font-semibold text-red-500">
              No packages available.
            </div>
          ) : (
            userData.map((post) => <PostCard key={post.packageId} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
