import { css } from '@emotion/react';

export const useFormItem = () => css`
    max-width: 466px;
    height: 67px;
    width: 100%;

    @media (max-width: 915px) {
        width: 128px;
        margin-bottom: 16px;
    }

    @media (max-width: 450px) {
        width: 272px;
        margin-bottom: 16px;
    }
`;
