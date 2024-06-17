import React from 'react';
import Navbar from '../../components/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="content">
                <h1>Bienvenido a MediCare</h1>
                
            </div>
        </div>
    );
};

export default Home;
