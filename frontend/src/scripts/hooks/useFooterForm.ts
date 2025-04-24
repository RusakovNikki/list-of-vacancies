import { css } from '@emotion/react';

export const useFooterForm = () => css`
    max-width: 466px;
    height: 67px;
    width: 438px;
    margin-bottom: 29px;

    @media (max-width: 915px) {
        width: 128px;
        margin-bottom: 16px;
    }

    @media (max-width: 450px) {
        width: 272px;
        margin-bottom: 16px;
    }
`;
