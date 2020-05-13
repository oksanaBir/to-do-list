import React from 'react';
import styles from '../styles/title.css';

export default function Title({ value, contentEditable, handleClick }) {
    if(contentEditable){
        return (
            <input
                className={styles.title}
                maxLength="20"
                value={value}
                style={{ height: '22px' }}
                onChange={() => handleClick()}
            />      
        );
    } else {
        return(
            <h2>{value}</h2>
        );
    }
}
