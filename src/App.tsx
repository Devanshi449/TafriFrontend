import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/parts/Header'
import HomePage from './components/HomePage';

// interface User {
//   packageId: number;
//   supplierId: number;
//   duration: number;
//   packageName: string;
//   description: string;
//   flightBooking: boolean;
//   accommodation: boolean;
//   sightseeing: boolean;
//   luxuryFacilities: string;
//   availableCount: number;
//   supplierPrice: number;
//   isPublic: boolean;
//   createdAt: string;
//   finalPrice: number;
//   totalSeats: number;
//   packageImage: string;
//   destination: string;
// }

function App() {
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

    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter> */}
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
