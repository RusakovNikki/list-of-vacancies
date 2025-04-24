import { AppProps } from 'next/app';
import { FC } from 'react';

import AppProvider from '@components/AppProvider';
import Footer from '@components/Footer';
import Header from '@components/Header';

import { useContainer } from '@scripts/hooks/useContainer';

const AppContent: FC<AppProps> = ({ Component, pageProps }) => {
    const containerStyles = useContainer();

    return (
        <div css={containerStyles}>
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
