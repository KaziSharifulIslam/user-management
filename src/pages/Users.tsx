import React from 'react';
import User from './User';

const Users = () => {
    const addUser = (): void => {
        console.log('Test');
    }
    return (
        <div>
            <User name="Rakib" age={23} addUser={addUser} />
        </div>
    );
};

export default Users;