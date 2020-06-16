import styles from '../styles/button.css';
import React from 'react';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Button({children, onClick, isDanger = false, isBlock = false}) {
    return (
        <button
            className={cx({
                button: true,
                danger: isDanger,
                block: isBlock,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}