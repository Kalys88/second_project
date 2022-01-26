import React from 'react';

const Todolistitem = ({id, label, done, important}) => {
    return (
        <span>{label}</span>
    )
}

export default Todolistitem;