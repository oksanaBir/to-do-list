import styles from '../styles/sorting.css';
import React from 'react';

const params = [
    { label: 'по цвету', value: 'color', },
    { label: 'по дате создания', value: 'date', },
    { label: 'по названию', value: 'name' },
];

export default function Sorting(props) {
    return (
        <select className={styles.sorting}>  // onChange value
            { 
                params.map((param, key) => 
                    <option key={key} className={styles.sortingParams}>{param.label}</option>
                )
            }
        </select>
    );
}