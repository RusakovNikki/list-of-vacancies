import { Theme, createTheme, useTheme as useGDSTheme } from '@greensight/gds/emotion';

import tokens from '../../public/tokens.json';
import { global } from './themes/global';

export const { colors, shadows } = tokens;
export type ColorsTheme = typeof colors;
export interface ExtendedTheme extends Omit<Theme, 'colors'> {
    colors?: ColorsTheme;
}

const theme = createTheme({
    tokens,
    settings: {
        global: global,
    },
});
const useTheme = () => useGDSTheme() as ExtendedTheme;

export { theme, useTheme };
