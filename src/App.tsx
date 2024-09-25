import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {
  const [count, setCount] = useState(0)
  // const [userData, setUserData] = useState<User[]>([]); 

  // useEffect(() => {
  //   // Call the API when the component is mounted
  //   fetch("/api/User/GetData", {
  //     method: "GET",
  // headers: {
  //   "Accept": "text/plain",
  // },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Update the state with the fetched data
  //       setUserData(data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error)
  //     })
  // }, []) // Empty dependency array ensures it runs only once when component is mounted

  return (
    <>
      <div>
        <p className='bg-blue-200'>Diya</p>
        
      </div>
      {/* Display the fetched user data */}
      {/* <div>
        <h2>User Data</h2>
        <ul>
          {userData.map((user, index) => (
            <li key={index}>
            <p><strong>Package Name:</strong> {user?.packageName}</p>
           
          </li>
          ))}
        </ul>
      </div> */}
    </>
  )
}

export default App
