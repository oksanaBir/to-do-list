import styles from '../styles/button.css';
import React from 'react';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Button({children, onClick, isDanger = false, disabled = false}) {
    return (
        <button
            className={cx({
                button: true,
                danger: isDanger,
                block: disabled,
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}