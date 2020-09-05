import styles from '../styles/button.less';
import React from 'react';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Button({children, onClick, isDanger = false, disabled = false}) {
    return (
        <button
            className={cx({
                button: true,
                danger: isDanger,
                disabled: disabled,
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}