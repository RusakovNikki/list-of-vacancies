import { css } from '@emotion/react';

export const useTitle = () => css`
    font-size: 64px;
    line-height: 76px;
    font-family: 'Rubik-regular';

    color: #000000;

    @media (max-width: 450px) {
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 38px;
    }
`;
