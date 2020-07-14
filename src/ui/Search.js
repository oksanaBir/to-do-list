import React from 'react';

export default function Search({value, onChange}) {
    return(
        <input
            type="search"
            onChange={(event) => onChange(event.target.value)}
            value={value}
        />
    );
}