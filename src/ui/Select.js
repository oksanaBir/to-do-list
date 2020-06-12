import styles from '../styles/select.css';
import React from 'react';

export default function Select({onChange, sortParams, value}) {
    return (
        <select className={styles.sorting} onChange={() => onChange(event)} value={value}>
            { 
                sortParams.map((sortParam, key) => 
                    <option
                        key={key}
                        className={styles.sortingParams}
                        value={sortParam.value}
                    >{sortParam.label}</option>
                )
            }
        </select>
    );
}