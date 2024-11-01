// src/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, addUser, updateUser, deleteUser } from './redux/userSlice';
import { fetchUsers,addUser, updateUser, deleteUser } from './services/userSlice';

function App() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editingUserId, setEditingUserId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        const newUser = { id: users.length + 1, name, email };
        dispatch(addUser(newUser));
        setName("");
        setEmail("");
    };

    const handleEditUser = (user) => {
        setEditingUserId(user.id);
        setName(user.name);
        setEmail(user.email);
    };

    const handleUpdateUser = () => {
        const updatedUser = { id: editingUserId, name, email };
        dispatch(updateUser(updatedUser));
        setEditingUserId(null);
        setName("");
        setEmail("");
    };

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>User Management</h1>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            {editingUserId ? (
                <button onClick={handleUpdateUser}>Update User</button>
            ) : (
                <button onClick={handleAddUser}>Add User</button>
            )}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email} 
                        <button onClick={() => handleEditUser(user)}>Edit</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
