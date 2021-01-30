import React from 'react';

export default function Pet({ name, animal, breed }) {
    return (
        <div>
            <h1 key="1">{ name }</h1>
            <h2 key="2">{ animal }</h2>
            <h2 key="3">{ breed }</h2>
        </div>
    );
};
