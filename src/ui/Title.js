import React from 'react';
import styles from '../styles/title.css';

export default function Title({value, contentEditable, handleChange, backgroundColor}) {
    if(contentEditable){
        return (
            <input
                className={styles.title}
                placeholder="Заголовок"
                maxLength="20"
                value={value}
                style={{ 
                    height: '22px',
                    backgroundColor
                }}
                onChange={handleChange}
            />
        );
    } else {
        return(
            <h2>{value}</h2>
        );
    }
}
