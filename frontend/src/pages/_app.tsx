import FooterRequestForm from '@/components/FooterRequestForm';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { FC } from 'react';

import AppProvider from '@components/AppProvider';

// import '../globals.scss';

const AppContent: FC<AppProps> = ({ Component, pageProps }) => {
    console.log(pageProps);

    return (
        <div className="container">
            <header className="header">
                <Link href="/">
                    <h1 className="title header__title rubik-light">List of vacancies</h1>
                </Link>
            </header>
            <Component {...pageProps} />
            <footer className="footer">
                <div className="container">
                    <div className="footer__title rubik-light">Leave a request</div>
                    <div className="footer__flex-container">
                        <div className="footer__flex-item">
                            <FooterRequestForm />
                            <div className="footer__confirm-message rubik-regular">
                                By clicking &quot;Send&quot; you confirm your consent to the{' '}
                                <a href="#" className="footer__link">
                                    processing of personal data
                                </a>
                            </div>
                        </div>
                        <div className="footer__flex-item">
                            <div className="about-company rubik-regular">
                                <div className="footer__message">
                                    We will advise you and help you start a new project
                                </div>
                                <div className="footer__phone">
                                    <a href="tel:+74993916669">+7 499 391-66-69</a>
                                </div>
                                <div className="footer__mail">
                                    <a href="mailto:mail@greensight.ru">mail@greensight.ru</a>
                                </div>
                                <div className="footer__adres">
                                    Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
                                </div>
                                <div className="footer__route">
                                    <a href="https://goo.gl/maps/N2EVxAnkKmJN4Uj87" target="_blank">
                                        How to get
                                    </a>
                                    there?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
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
