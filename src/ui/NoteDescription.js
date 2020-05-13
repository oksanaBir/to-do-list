import styles from '../styles/noteDescription.css';
import React, { Children } from 'react';

export default function NoteDescription(props){
    return(
        <textarea className={styles.noteDescription}>
            {props.children}
        </textarea>
    )
}