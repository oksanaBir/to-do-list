import styles from '../styles/noteDescription.css';
import React, { Children } from 'react';

export default function NoteDescription({children, handleClick}){
    return(
        <textarea className={styles.noteDescription} onChange={handleClick}>
            {children}
        </textarea>
    )
}