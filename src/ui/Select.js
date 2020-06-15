import styles from '../styles/select.css';
import React from 'react';

export default function Select({onChange, sortParams, value}) {
    return (
        <select className={styles.sort} onChange={() => onChange(event)} value={value}>
            { 
                sortParams.map((sortParam, key) => 
                    <option
                        key={key}
                        className={styles.sortParams}
                        value={sortParam.value}
                    >{sortParam.label}</option>
                )
            }
        </select>
    );
}