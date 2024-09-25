import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    userId: string;
    name: string;
    email: string;
    role: string;
    registeredAt: string;
}

const Admin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/proxy/GetUsers'); 
                setUsers(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="admin-page p-5">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <>
                    <h2 className="text-xl mb-2">User List</h2>
                    <table className="min-w-full border">
                        <thead>
                            <tr>
                                <th className="border p-2">User ID</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Role</th>
                                <th className="border p-2">Registered At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.userId}>
                                    <td className="border p-2">{user.userId}</td>
                                    <td className="border p-2">{user.name}</td>
                                    <td className="border p-2">{user.email}</td>
                                    <td className="border p-2">{user.role}</td>
                                    <td className="border p-2">{new Date(user.registeredAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Admin;
