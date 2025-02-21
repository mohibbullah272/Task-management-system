import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
       <header>
        <Navbar></Navbar>
       </header>
       <main className='max-w-7xl mx-auto '>
        <Outlet></Outlet>
       </main>
       <footer>
        
       </footer>
        </div>
    );
};

export default Main;