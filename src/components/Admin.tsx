// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useState } from 'react';
import Header from './util/Header';
import Sidebar from './util/Sidebar/Sidebar';
import Content from './ui/Content';
import Main from './ui/Main';
import Profile from './Profile/Profile';

interface User {
    userId: string;
    name: string;
    email: string;
    role: string;
    registeredAt: string;
}

const Admin = () => {

    const [darkMode,setDarkMode] = useState(false);
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
    };

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    }
    // const [users, setUsers] = useState<User[]>([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await axios.get('/proxy/GetUsers'); 
    //             setUsers(response.data);
    //         } catch (err) {
    //             console.error(err);
    //             setError('Failed to fetch users');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchUsers();
    // }, []);

    return (
        <div className={`${darkMode && "dark"} font-quickSand`}>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar}/>
            <Sidebar isSidebarOpen={isSidebarOpen}/>
            <Main>
                <Content>Main Content</Content>
                <Profile/>
            </Main>
        </div>
       
    );
};

export default Admin;
