import React from 'react';
import classNames from 'classnames/bind';

export default function Title({value, contentEditable, onChange, backgroundColor, validation}) {
    if(contentEditable) {
        return (
            <input
                className={classNames({
                    error: !validation,
                    title: true
                })}
                required="required"
                placeholder="Заголовок"
                maxLength="14"
                value={value}
                style={{ 
                    height: '22px',
                    backgroundColor,
                }}
                onChange={(event) => onChange(event.target.value)}
            />
        );
    } else {
        return(
            <h2>{value}</h2>
        );
    }
}