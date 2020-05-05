import React from 'react';
import styles from '../styles/colorPicker.css';

export default function ColorPicker(changeColor) {
    return (
        <ul className={styles.colorPicker}>
            {
                colors.map((color, key) =>
                    <li key={key} className={styles.color} style={{backgroundColor: color}} onClick={changeColor}></li>
                )
            }
        </ul>
    )
}

const colors = ['#F0F0F0', '#F288AF', '#134BF2', '#F2A516', '#F2490C'];