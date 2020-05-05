import styles from '../styles/note.css';
import React from 'react';
import ColorPicker from './ColorPicker';
import Title from './Title';
import Button from './Button';

export default function Note(props) {
    return (
        <div className={styles.note}>
            <Title contentEditable={true}>Заголовок</Title>
            <textarea className={styles.noteDescription}></textarea>
            <ColorPicker />
            <Button>Изменить</Button>
            <Button>Удалить</Button>
        </div>
    );
}