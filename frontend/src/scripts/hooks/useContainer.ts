import { Interpolation, Theme, css } from '@emotion/react';

import { useMedia } from './useMedia';

export const useContainer = (): Interpolation<Theme> => {
    const { xxs } = useMedia();

    return {
        maxWidth: '1226px',
        width: '100%',
        margin: '0 auto',
        padding: '0 15px',
        boxSizing: 'border-box',

        [xxs]: {
            width: '272px',
        },
    };
};
