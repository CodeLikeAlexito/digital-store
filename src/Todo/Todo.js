import React from 'react';

const Todo = (props) => {
    return <li>{props.text}</li>;
};

export default Todo;

/*

{props.items.map((item, index) => (
            <li key={index}>{item}</li>
            ))
        } 

*/