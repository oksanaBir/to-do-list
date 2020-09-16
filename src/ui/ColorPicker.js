import React from 'react';
// import styles from '../styles/colorPicker.less';
import classNames from 'classnames';

// let cx = classNames.bind(styles);

export default function ColorPicker({changeColor, colors, selectedColor}) {
    return (
        <ul className={classNames('colorPicker')}>
            {
                colors.map((color, key) =>
                    <li 
                        key={key}
                        className={classNames(
                            'color',
                            { selected: key === selectedColor },
                        )}
                        style={{ backgroundColor: color }}
                        onClick={() => changeColor(key)}
                    />
                )
            }
        </ul>
    );
}