import React from 'react';
import styles from '../styles/header.css';
import Sorting from './Sorting'

export default function Header(props){
    return (
        <>
            <div className={styles.header}>{props.children}</div>
            <Sorting />
        </>
    );
}