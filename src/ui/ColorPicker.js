import React from 'react';
import styles from '../styles/colorPicker.css';

export default function ColorPicker({changeColor, colors}) {
    return (
        <ul className={styles.colorPicker}>
            {
                colors.map((color, key) =>
                    <li 
                        key={key}
                        className={styles.color}
                        onClick={() => changeColor(key)}
                        style={{ backgroundColor: color }}
                    />
                )
            }
        </ul>
    );
}