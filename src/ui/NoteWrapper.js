import styles from '../styles/noteWrapper.css';
import React from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NoteWrapper({children, backgroundColor, contentEditable}) {
    let className = cx({
        note: true,
        editableNote: contentEditable
    });

    return (
        <div
            className={className}
            style={{ backgroundColor }} 
        >
            {children}
        </div>
    );
}