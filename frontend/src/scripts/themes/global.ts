import { Theme } from '@greensight/gds/emotion';

export const global: Theme['global'] = {
    base: {
        css: {
            '*': {
                fontFamily: '"Formular","Rubik-light","Rubik-regular","Roboto"',
            },
        },
    },
    fonts: {
        fontFace: [
            {
                '@font-face': {
                    fontFamily: 'Rubik-light',
                    src: "url('/fonts/Rubik-Light.woff')",
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Rubik-regular',
                    src: "url('/fonts/Rubik-Regular.woff')",
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: "url('/fonts/Roboto-Regular.woff')",
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Formular',
                    src: "url('/fonts/Formular.woff')",
                },
            },
        ],
    },
};
