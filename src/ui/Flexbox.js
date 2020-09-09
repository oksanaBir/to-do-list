import React from 'react';
import classNames from 'classnames';

export const flexPositions = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
}

export const flexDirection = {
    row: 'row',
    column: 'column',
}

export function FlexBox({
    children,
    position = flexPositions.start,
    margin = 10,
    direction = flexDirection.row,
}) {
    return(
        <div
            className={classNames('flexbox')}
            style={{
                justifyContent: position,
                margin: margin + 'px',
                flexDirection: direction,
            }}
        >
            {children}
        </div>
    );
}