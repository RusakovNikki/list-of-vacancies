import { Interpolation, Theme, css } from '@emotion/react';

import { useMedia } from './useMedia';

export const useTitle = (): Interpolation<Theme> => {
    const { xxs } = useMedia();

    return {
        fontSize: '64px',
        lineHeight: '76px',
        fontFamily: 'Rubik-regular',
        color: '#000000',

        [xxs]: {
            fontSize: '32px',
            lineHeight: '38px',
            marginBottom: '38px',
        },
    };
};
