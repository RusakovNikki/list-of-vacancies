import { Interpolation, Theme, css } from '@emotion/react';

export const useFormTitle = (): Interpolation<Theme> => css`
    font-size: 16px;
    line-height: 160%;
    font-family: 'Rubik-regular';
`;
