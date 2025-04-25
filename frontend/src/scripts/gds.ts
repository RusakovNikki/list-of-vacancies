import { createTheme } from '@greensight/gds/emotion';

import tokens from '../../public/tokens.json';
import { global } from './themes/global';

export const theme = createTheme({
    tokens,
    settings: {
        global: global,
    },
});
