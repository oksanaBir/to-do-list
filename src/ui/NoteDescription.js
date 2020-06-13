import styles from '../styles/noteDescription.css';
import React from 'react';

export default function NoteDescription({value, handleChange, backgroundColor, contentEditable}) {
    if(contentEditable) {
        return (
            <textarea
                className={styles.noteDescription}
                onChange={() => handleChange(event)}
                style={{ 
                    backgroundColor,
                    margin: '8px'
                }}
                placeholder="Текст заметки"
                value={value}
            />
        )
    } else {
        return (
            <textarea
                disabled="disabled"
                className={styles.noteDescription}
                style={{ backgroundColor, height: '156px' }}
            > {value.split('\n').map((str, key) => <p key={key} style={{ margin: '0px' }}> {str} </p>)} </textarea>
        );
    }
}