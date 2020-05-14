import React from 'react';
import styles from '../styles/header.css';

export default function Header({children}){
    return (
        <div className={styles.header}>{children}</div>
    );
}