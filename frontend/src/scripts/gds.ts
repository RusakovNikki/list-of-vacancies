import { CSSObject } from '@emotion/react';
import { Theme, createTheme, typography as gdsTypography, useTheme as useGDSTheme } from '@greensight/gds/emotion';

import tokens from '../../public/tokens.json';
import { global } from './themes/global';

export const { colors, shadows } = tokens;
export type ColorsTheme = typeof colors;
export type TypographyParam = keyof typeof tokens.typography.styles;
export interface ExtendedTheme extends Omit<Theme, 'colors'> {
    colors?: ColorsTheme;
}

const theme = createTheme({
    tokens,
    settings: {
        global: global,
    },
});
const typography = (name: TypographyParam = 'bodySm') => gdsTypography(name, theme) as CSSObject;
const useTheme = () => useGDSTheme() as ExtendedTheme;

export { theme, useTheme, typography };
