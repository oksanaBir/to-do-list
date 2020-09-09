import React from 'react';
import classNames from 'classnames';

export default function Button({children, onClick, danger = false, disabled = false}) {
    return (
        <button
            className={classNames(
                'button',
                {
                    danger,
                    disabled,
                }
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}