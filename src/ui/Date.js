import React from 'react';
import ReactDatePicker from 'react-datepicker';
import classNames from 'classnames';

export default function DatePicker({value, contentEditable, onChange}){
    if (contentEditable) {
        return (
            <ReactDatePicker
                dateFormat="dd/MM/yyyy"
                selected={new Date(value)}
                onChange={(value) => onChange(value.getTime())}
            />
        );
    } else {
        return (
            <p className={classNames.date}>{ new Date(value).toLocaleDateString() }</p>
        );
    }
}