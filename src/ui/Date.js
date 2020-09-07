import React from 'react';
import styles from '../styles/date.less';
import ReactDatePicker from 'react-datepicker';

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
            <p className={styles.date}>{ new Date(value).toLocaleDateString() }</p>
        );
    }
}