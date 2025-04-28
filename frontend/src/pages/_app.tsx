import { AppProps } from 'next/app';
import { FC } from 'react';

import AppProvider from '@components/AppProvider';
import Footer from '@components/Footer';
import Header from '@components/Header';

import { useMedia } from '@scripts/hooks/useMedia';

const AppContent: FC<AppProps> = ({ Component, pageProps }) => {
    const { xxs } = useMedia();

    return (
        <div
            css={{
                maxWidth: '1226px',
                width: '100%',
                margin: '0 auto',
                padding: '0 15px',
                boxSizing: 'border-box',

                [xxs]: {
                    width: '272px',
                },
            }}
        >
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
};

function MyApp(props: AppProps) {
    return (
        <AppProvider {...props}>
            <AppContent {...props} />
        </AppProvider>
    );
}

export default MyApp;
