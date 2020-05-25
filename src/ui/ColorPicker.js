import React from 'react';
import styles from '../styles/colorPicker.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function ColorPicker({changeColor, colors, selectedColor}) {
    return (
        <ul className={styles.colorPicker}>
            {
                colors.map((color, key) =>
                    <li 
                        key={key}
                        className={cx({
                            color: true,
                            selectedColor: key === selectedColor,
                        })}
                        style={{ backgroundColor: color }}
                        onClick={() => changeColor(key)}
                    />
                )
            }
        </ul>
    );
}