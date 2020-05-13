import styles from '../styles/noteWrapper.css';
import React from 'react';

export default function NoteWrapper(props) {
    return (
        <div className={styles.note}>
            {props.children}
        </div>
    );
}