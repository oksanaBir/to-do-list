import React from 'react';
import styles from '../styles/colorPicker.css';

export default function ColorPicker(props) {
    return (
        <ul className={styles.colorPicker}>{colorPicker}</ul>
    )
}

const colors = ['#F288AF', '#134BF2', '#F2A516', '#F2490C'];
const colorPicker = colors.map((color, key) =>
    <li key={key} className={styles.color} style={{backgroundColor: color}}></li>
);