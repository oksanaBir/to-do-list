import React from 'react';
import styles from '../styles/title.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Title({value, contentEditable, handleChange, backgroundColor, validation}) {
    if(contentEditable) {
        return (
            <input
                className={cx({
                    emptyValue: !validation,
                    title: true
                })}
                required="required"
                placeholder="Заголовок"
                maxLength="20"
                value={value}
                style={{ 
                    height: '22px',
                    backgroundColor,
                }}
                onChange={() => handleChange(event)}
            />
        );
    } else {
        return(
            <h2>{value}</h2>
        );
    }
}
