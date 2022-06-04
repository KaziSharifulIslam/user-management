import React, { FC } from 'react';

// system 2, use props with direct FC: <>
/* const User: FC<{name: string, age: number}> = (props) => {
    return (
        <div>
            <h2>Hello from {props.name}</h2>
            I'm {props.age} years old.
        </div>
    );
}; */


// system 3, use interface to destructure props
interface Props {
    name: string,
    age: number,
    addUser: () => void
}
const User: FC<Props> = ({ name, age, addUser }) => {
    return (
        <div>
            <h2>Hello from {name}</h2>
            I'm {age} years old. <br />
            <button onClick={addUser}>Add me</button>
        </div>
    );
};

export default User;