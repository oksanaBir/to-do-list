import React from 'react';
import styles from '../styles/header.css';

export default function Header(props){
    return (
        <>
            <div className={styles.header}>{props.children}</div>
        </>
    );
}