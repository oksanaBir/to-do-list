import React from 'react';
import classNames from 'classnames';

export default function Header({children}){
    return (
        <div className={classNames('header')}>{children}</div>
    );
}