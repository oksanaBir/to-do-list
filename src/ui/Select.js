import styles from '../styles/select.css';
import React from 'react';

export default function Select({handleChange, sortingParams}) {
    return (
        <select className={styles.sorting}>
            { 
                sortingParams.map((sortingParams, key) => 
                    <option
                        key={key}
                        className={styles.sortingParams}
                        value={sortingParams.value}
                        onChange={() =>handleChange(key)}    
                    >{sortingParams.label}</option>
                )
            }
        </select>
    );
}