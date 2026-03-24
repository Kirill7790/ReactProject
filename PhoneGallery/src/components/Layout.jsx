import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ likedCount, onOpenForm }) => {
    return (
        <>
            <Header
                likedCount={likedCount}
                onOpenForm={onOpenForm}
            />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;