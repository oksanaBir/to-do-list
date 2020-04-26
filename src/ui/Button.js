import styles from '../styles/button.css';
import React from 'react'; 

export default function Button(props) {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}
