import styles from '../styles/noteDescription.css';
import React from 'react';

export default function NoteDescription({children, handleChange, backgroundColor, contentEditable}){
    if(contentEditable){
        return(
            <textarea
                className={styles.noteDescription}
                onChange={handleChange}
                style={{ 
                    backgroundColor,
                    ScrollbarBaseColor: backgroundColor,
                    ScrollbarBaseColor: 'red'
                }}
                placeholder="Текст заметки"
            >
                {children}
            </textarea>            
        )
    } else {
        return (
            <span
                disabled="disabled"
                className={styles.noteDescription}
                style={{ backgroundColor, paddingTop: '19px', height: '149px' }}
            >
                {children}
            </span>
        );
    }
}