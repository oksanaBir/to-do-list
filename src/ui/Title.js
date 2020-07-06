import React from 'react';
import styles from '../styles/title.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Title({value, contentEditable, onChange, backgroundColor, validation}) {
    if(contentEditable) {
        return (
            <input
                className={cx({
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