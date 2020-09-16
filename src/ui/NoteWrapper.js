import React from 'react';
import classNames from 'classnames';

export default function NoteWrapper({children, backgroundColor, contentEditable}) {
    let className = classNames(
        'note',
    );

    return (
        <div
            className={className}
            style={{ backgroundColor }} 
        >
            {children}
        </div>
    );
}