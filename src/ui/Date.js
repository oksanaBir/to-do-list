import React from 'react';
import styles from '../styles/date.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Date({value, contentEditable, handleChange, validation}){
    if (contentEditable) {
        return (
            <input
                required="1"
                type="date"
                value={value}
                onChange={() => handleChange(event)}
                className={cx({
                    emptyValue: !validation
                })}
            />
        );
    } else {
        return (
        <p className={styles.date}>{value}</p>
        );
    }
}

