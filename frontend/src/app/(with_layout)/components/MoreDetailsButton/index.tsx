'use client';

import { IVacancy } from '@/schemas/interfaces/vacancy';
import { css } from '@emotion/react';
import { Layout } from '@greensight/gds/emotion';
import { useRouter } from 'next/navigation';

interface IMoreDetailsButtonProps {
    vacancy: IVacancy;
}

const MoreDetailsButton = (props: IMoreDetailsButtonProps) => {
    const { vacancy } = props;
    const router = useRouter();

    return (
        <Layout
            type="flex"
            direction="column"
            justify="space-between"
            css={css`
                width: 100%;
                height: 100%;
                margin: 0px;
            `}
            style={{
                margin: '0',
            }}
        >
            <div
                css={css`
                    background: rgb(255, 255, 255);
                `}
            >
                <div
                    css={css`
                        font-size: 32px;
                        line-height: 160%; /* or 51px */
                        color: #000000;
                        font-family: 'Roboto';
                        @media (max-width: 450px) {
                            font-size: 22px;
                            margin-bottom: 16px;
                        }
                    `}
                >
                    {vacancy.name}
                </div>
            </div>
            <div
                css={css`
                    font-size: 16px;
                    line-height: 140%;
                    margin-top: 8px;
                    text-align: center;
                    color: #a3a6a9;
                    cursor: pointer;
                    font-family: 'Roboto';
                    @media (max-width: 770px) {
                        align-self: start;
                    }
                    @media (max-width: 450px) {
                        align-self: center;
                    }
                `}
                onClick={() => {
                    router.push(vacancy.id.toString());
                }}
            >
                Подробнее
            </div>
        </Layout>
    );
};

export default MoreDetailsButton;
