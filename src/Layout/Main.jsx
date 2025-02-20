import React from 'react';
import ThemeSwitcher from '../shared/ThemeSwitcher';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
       <header>
        <Navbar></Navbar>
       </header>
       <main>
        <Outlet></Outlet>
       </main>
       <footer>
        
       </footer>
        </div>
    );
};

export default Main;