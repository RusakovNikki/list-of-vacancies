import { css } from '@emotion/react';

export const useContainer = () => css`
    max-width: 1226px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: 450px) {
        width: 272px;
    }
`;
