import { CSSProperties } from 'react';

export const useButton = (isSmall?: boolean) => {
    const result: CSSProperties = {
        width: '226px',
        fontSize: '14px',
        lineHeight: '160%',
        textAlign: 'center',
        color: '#ffffff',
        padding: '11px',
        backgroundColor: 'black',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Rubik-light',
    };

    if (isSmall) {
        result.width = '150px';
        result.padding = '5px';
    }

    return result;
};
