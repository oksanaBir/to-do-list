import styles from '../styles/noteDescription.css';
import React from 'react';

export default function NoteDescription({children, handleChange}){
    return(
        <textarea className={styles.noteDescription} onChange={handleChange}>
            {children}
        </textarea>
    )
}