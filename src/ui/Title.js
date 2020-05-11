import React from 'react';
import styles from '../styles/title.css';

export default function Title({ children, contentEditable, handleChange }) {
    if(contentEditable){
        return (
            <h2>{ children }</h2>
        );
    } else {
        return(
            <input className={styles.title} maxLength="20" onChange={handleChange} style={{ height: '22px' }}/>
        );
    }
}
