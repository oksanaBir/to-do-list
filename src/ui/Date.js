import React from 'react';
import styles from '../styles/date.css';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';

let cx = classNames.bind(styles);

export default function Date({value, contentEditable, onChange, validation}){
    if (contentEditable) {
        return (
            // <input
            //     required="1"
            //     type="date"
            //     value={value}
            //     onChange={(event) => onChange(event.target.value)}
            //     className={cx({
            //         error: !validation
            //     })}
            // />
            <DatePicker
                value={value}
                onChange={(date) => onChange(date)}
                className={cx({
                    error: !validation
                })}
            />
        );
    } else {
        return (
            <p className={styles.date}>{value}</p>
        );
    }
}