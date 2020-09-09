import React from 'react';
import classNames from 'classnames';

export default function NoteWrapper({children, backgroundColor, contentEditable}) {
    let className = classNames(
        'note',
        { editable: contentEditable },
    );

    return (
        <div
            className={classNames(className)}
            style={{ backgroundColor }} 
        >
            {children}
        </div>
    );
}