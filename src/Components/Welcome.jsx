import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Welcome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h3 className='text-3xl font-semibold '>Hello {user?.displayName}</h3>
        </div>
    );
};

export default Welcome;