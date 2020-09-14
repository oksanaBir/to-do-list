import React from 'react';
import classNames from 'classnames';

export default function NoteDescription({value, onChange, backgroundColor, contentEditable}) {
    if(contentEditable) {
        return (
            <textarea
                className={classNames('noteDescription')}
                onChange={(event) => onChange(event.target.value)}
                style={{ 
                    backgroundColor,
                    margin: '8px',
                }}
                placeholder="Текст заметки"
                value={value}
            />
        )
    } else {
        return (
            <textarea
                disabled="disabled"
                value={value}
                className={classNames('noteDescription')}
                style={{ backgroundColor, height: '180px' }}
            > {value.split('\n').map((str, key) => <p key={key} style={{ margin: '0px' }}> {str} </p>)} </textarea>
        );
    }
}