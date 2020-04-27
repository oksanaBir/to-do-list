import styles from '../styles/sorting.css';
import React from 'react';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Sorting(props) {
    return (
        <select className={styles.sorting}>
            {
                sortingParams.map((param, key) => 
                    <option key={key} className={sortingParams}>{param}</option>
                )
            }
        </select>
    );
}

const sortingParams = ['Сортировка по', 'по цвету', 'по дате создания', 'по названию'];

let className = cx({
    sortingParams: true,
    
});
