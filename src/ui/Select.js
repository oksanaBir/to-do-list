import styles from '../styles/select.less';
import React from 'react';

export default function Select({onChange, sortParams, value}) {
    return (
        <select className={styles.sort} onChange={(event) => onChange(event.target.value)} value={value}>
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