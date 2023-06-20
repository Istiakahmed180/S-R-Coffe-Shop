import React from 'react';
import Navbar from '../Pages/Share/Navbar/Navbar';
import Footer from '../Pages/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;