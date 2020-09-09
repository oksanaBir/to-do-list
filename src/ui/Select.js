import React from 'react';
import classNames from 'classnames';

export default function Select({onChange, sortParams, value}) {
    return (
        <select className={classNames('sort')} onChange={(event) => onChange(event.target.value)} value={value}>
            { 
                sortParams.map((sortParam, key) => 
                    <option
                        key={key}
                        className={classNames('sortParams')}
                        value={sortParam.value}
                    >{sortParam.label}</option>
                )
            }
        </select>
    );
}