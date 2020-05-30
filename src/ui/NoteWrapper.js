import styles from '../styles/noteWrapper.css';
import React from 'react';

export default function NoteWrapper({children, backgroundColor}) {
    return (
        <div className={styles.note} style={{ backgroundColor }}>
            {children}
        </div>
    );
}