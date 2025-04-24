import { css } from '@emotion/react';

import FooterRequestForm from '@components/FooterRequestForm';

const Footer = () => {
    return (
        <footer
            css={css`
                margin-top: 90px;
                margin-bottom: 164px;
            `}
        >
            <div
                css={css`
                    margin-bottom: 74px;
                    line-height: 76px;
                    font-size: clamp(2rem, 0.364rem + 5.82vw, 4rem);
                    font-family: 'Rubik-light';

                    @media (max-width: 450px) {
                        margin-bottom: 32px;
                    }
                `}
            >
                Leave a request
            </div>
            <div
                css={css`
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;

                    @media (max-width: 450px) {
                        flex-direction: column;
                    }
                `}
            >
                <div>
                    <FooterRequestForm />
                    <div
                        css={css`
                            width: 389px;
                            font-size: 14px;
                            line-height: 160%;
                            margin-top: 43px;
                            font-family: 'Rubik-regular';

                            @media (max-width: 770px) {
                                width: 100%;
                            }

                            @media (max-width: 450px) {
                                width: 283px;
                            }
                        `}
                    >
                        By clicking &quot;Send&quot; you confirm your consent to the{' '}
                        <a
                            href="#"
                            css={css`
                                display: inline-block;
                                border-bottom: 2px dashed black;
                            `}
                        >
                            processing of personal data
                        </a>
                    </div>
                </div>
                <div>
                    <div
                        css={css`
                            font-family: 'Rubik-regular';
                        `}
                    >
                        <div
                            css={css`
                                font-size: clamp(0.75rem, 0.443rem + 1.09vw, 1.125rem);
                                line-height: 160%;
                                width: 307px;
                                margin-bottom: 74px;

                                @media (max-width: 450px) {
                                    margin-top: 32px;
                                    width: 271px;
                                }
                            `}
                        >
                            We will advise you and help you start a new project
                        </div>
                        <div
                            css={css`
                                font-size: clamp(1rem, 0.182rem + 2.91vw, 2rem);
                                line-height: 24px;
                                margin-bottom: 8px;

                                @media (max-width: 450px) {
                                    margin-top: 33px;
                                    font-size: 22px;
                                }
                            `}
                        >
                            <a href="tel:+74993916669">+7 499 391-66-69</a>
                        </div>
                        <div
                            css={css`
                                font-size: clamp(1rem, 0.182rem + 2.91vw, 2rem);
                                line-height: 32px;
                                margin-bottom: 78px;

                                @media (max-width: 450px) {
                                    margin-top: 10px;
                                    font-size: 22px;
                                }
                            `}
                        >
                            <a href="mailto:mail@greensight.ru">mail@greensight.ru</a>
                        </div>
                        <div
                            css={css`
                                font-size: clamp(0.75rem, 0.443rem + 1.09vw, 1.125rem);
                                line-height: 160%;
                                width: 275px;
                                margin-bottom: 5px;
                            `}
                        >
                            Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
                        </div>
                        <div
                            css={css`
                                ont-size: clamp(0.75rem, 0.443rem + 1.09vw, 1.125rem);
                                line-height: 24px;
                            `}
                        >
                            <a href="https://goo.gl/maps/N2EVxAnkKmJN4Uj87" target="_blank">
                                How to get
                            </a>
                            there?
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
