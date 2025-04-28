import { Interpolation, Theme, css } from '@emotion/react';

import { useMedia } from './useMedia';

export const useFormItem = (): Interpolation<Theme> => {
    const { xxs, md } = useMedia();

    return {
        maxWidth: '466px',
        height: '67px',
        width: '100%',

        [md]: {
            width: '128px',
            marginBottom: '16px',
        },

        [xxs]: {
            width: '272px',
            marginBottom: '16px',
        },
    };
};
