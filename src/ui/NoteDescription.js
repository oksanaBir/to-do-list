import styles from '../styles/noteDescription.css';
import React from 'react';

export default function NoteDescription({value, onChange, backgroundColor, contentEditable}) {
    if(contentEditable) {
        return (
            <textarea
                className={styles.noteDescription}
                onChange={(event) => onChange(event.target.value)}
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
                style={{ backgroundColor, height: '170px', width: '226px' }}
            > {value.split('\n').map((str, key) => <p key={key} style={{ margin: '0px' }}> {str} </p>)} </textarea>
        );
    }
}