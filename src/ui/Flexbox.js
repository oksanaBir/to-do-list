import React from 'react';
import styles from '../styles/flexbox.css';

export const flexPositions = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
}

export function FlexBox({
    children,
    position = flexPositions.start,
    margin = 10,
}) {
    return(
        <div
            className={styles.flexbox}
            style={{
                justifyContent: position,
                margin: margin + 'px',
            }}
        >
            {children}
        </div>
    );
}

