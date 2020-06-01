import styles from '../styles/noteDescription.css';
import React from 'react';

export default function NoteDescription({value, handleChange, backgroundColor, contentEditable}){
    if(contentEditable){
        return(
            <textarea
                className={styles.noteDescription}
                onChange={() => handleChange(event)}
                style={{ 
                    backgroundColor,
                    ScrollbarBaseColor: backgroundColor,
                    ScrollbarBaseColor: 'red'
                }}
                placeholder="Текст заметки"
                value={value}
            />
        )
    } else {
        return (
            <span
                disabled="disabled"
                className={styles.noteDescription}
                style={{ backgroundColor, paddingTop: '19px', height: '149px' }}
            > {value.replace(/\n/g, '</ br>')}
        
            </span>
        );
    }
}