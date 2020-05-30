import styles from '../styles/sorting.css';
import React from 'react';

const params = [
    { label: 'по цвету', value: 'color', },
    { label: 'по дате создания', value: 'date', },
    { label: 'по названию', value: 'name' },
];

export default function Select({handleChange}) {
    return (
        <select className={styles.sorting}>
            { 
                params.map((param, key) => 
                    <option
                        key={key}
                        className={styles.sortingParams}
                        value={param.value}
                        onChange={handleChange}    
                    >{param.label}</option>
                )
            }
        </select>
    );
}