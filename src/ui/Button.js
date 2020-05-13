import styles from '../styles/button.css';
import React from 'react';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Button({children, handleClick, isDanger = false}) {
    return (
        <button
            className={cx({
                button: true,
                danger: isDanger,
            })}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}