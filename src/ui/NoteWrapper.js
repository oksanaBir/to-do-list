import styles from '../styles/noteWrapper.css';
import React from 'react';

export default function NoteWrapper({children}) {
    return (
        <div className={styles.note}>
            {children}
        </div>
    );
}