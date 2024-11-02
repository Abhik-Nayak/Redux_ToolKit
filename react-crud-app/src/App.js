import React from 'react';
import AuthProvider from './context/AuthContext';
import Routesection from './routes';
import "./styles/App.css"

const App = () => {
    return (
        <AuthProvider>
            <Routesection />
        </AuthProvider>
    );
};

export default App;
