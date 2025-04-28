import { Layout, scale } from '@greensight/gds/emotion';

import FooterRequestForm from '@components/FooterRequestForm';

import { useMedia } from '@scripts/hooks/useMedia';

const Footer = () => {
    const { xxs, sm } = useMedia();

    return (
        <footer css={{ marginTop: '90px', marginBottom: '164px' }}>
            <div
                css={{
                    marginBottom: '74px',
                    lineHeight: '76px',
                    fontSize: 'clamp(2rem, 0.364rem + 5.82vw, 4rem)',
                    fontFamily: 'Rubik-light',

                    [xxs]: {
                        marginBottom: '32px',
                    },
                }}
            >
                Leave a request
            </div>
            <Layout
                type="flex"
                justify="space-between"
                gap={scale(1)}
                direction={{
                    xxxl: 'row',
                    xxs: 'column',
                }}
            >
                <Layout.Item>
                    <FooterRequestForm />
                    <div
                        css={{
                            width: '389px',
                            fontSize: '14px',
                            lineHeight: '160%',
                            marginTop: '43px',
                            fontFamily: 'Rubik-regular',

                            [sm]: {
                                width: '100%',
                            },

                            [xxs]: {
                                width: '283px',
                            },
                        }}
                    >
                        By clicking &quot;Send&quot; you confirm your consent to the{' '}
                        <a
                            href="#"
                            css={{
                                display: 'inline-block',
                                borderBottom: '2px dashed black',
                            }}
                        >
                            processing of personal data
                        </a>
                    </div>
                </Layout.Item>
                <Layout.Item>
                    <div
                        css={{
                            fontFamily: 'Rubik-regular',
                        }}
                    >
                        <div
                            css={{
                                fontSize: 'clamp(0.75rem, 0.443rem + 1.09vw, 1.125rem)',

                                [xxs]: {
                                    marginTop: '32px',
                                    width: '271px',
                                },
                            }}
                        >
                            We will advise you and help you start a new project
                        </div>
                        <div
                            css={{
                                fontSize: 'clamp(1rem, 0.182rem + 2.91vw, 2rem)',
                                lineHeight: '24px',
                                marginBottom: '8px',

                                [xxs]: {
                                    marginTop: '33px',
                                    fontSize: '22px',
                                },
                            }}
                        >
                            <a href="tel:+74993916669">+7 499 391-66-69</a>
                        </div>
                        <div
                            css={{
                                fontSize: 'clamp(1rem, 0.182rem + 2.91vw, 2rem)',
                                lineHeight: '32px',
                                marginBottom: '78px',

                                [xxs]: {
                                    marginTop: '10px',
                                    fontSize: '22px',
                                },
                            }}
                        >
                            <a href="mailto:mail@greensight.ru">mail@greensight.ru</a>
                        </div>
                        <div
                            css={{
                                fontSize: 'clamp(0.75rem, 0.443rem + 1.09vw, 1.125rem)',
                                lineHeight: '160px',
                                width: '275px',
                                marginBottom: '5px',
                            }}
                        >
                            Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
                        </div>
                        <div
                            css={{
                                fontSize: 'clamp(0.75rem, 0.443rem + 1.09vw, 1.125rem)',
                                lineHeight: '24px',
                            }}
                        >
                            <a href="https://goo.gl/maps/N2EVxAnkKmJN4Uj87" target="_blank">
                                How to get
                            </a>
                            there?
                        </div>
                    </div>
                </Layout.Item>
            </Layout>
        </footer>
    );
};

export default Footer;
