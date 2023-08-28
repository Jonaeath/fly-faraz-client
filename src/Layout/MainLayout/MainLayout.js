import React from 'react';
import Navbar from '../../SharedFile/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedFile/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;