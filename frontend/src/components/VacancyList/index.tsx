import VacancyComponent from '@/components/VacancyComponent';
import { TSearchParams } from '@/pages';
import { IVacancyWrapper } from '@/schemas/interfaces/vacancy';
import { css } from '@emotion/react';
import { Layout } from '@greensight/gds/emotion';
import { notFound } from 'next/navigation';

import { useButton } from '@scripts/hooks/useButton';

import styles from './VacancyList.module.scss';

export interface IVacancyListProps {
    vacancies: IVacancyWrapper;
    searchParams: TSearchParams;
}

const VacancyList = (props: IVacancyListProps) => {
    const { vacancies, searchParams } = props;

    const buttonStyles = useButton(true);
    const buttonBigStyles = useButton();

    return (
        <section>
            {
                vacancies?.result.length ? (
                    vacancies.result.map(vacancy => {
                        return (
                            <VacancyComponent key={vacancy.id} vacancy={vacancy}>
                                <div className={styles['vacancy-list__content']}>
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
                                        <div className={styles['vacancy-list__desc']}>
                                            <div className={styles['vacancy-list__title']}>{vacancy.name}</div>
                                        </div>
                                        <div className={styles['vacancy-list__more-btn']}>Подробнее</div>
                                    </Layout>
                                    <button
                                        css={{
                                            ...buttonStyles,
                                            alignSelf: 'flex-start',
                                            minWidth: '200px',
                                            width: '200px',
                                        }}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </VacancyComponent>
                        );
                    })
                ) : (
                    <></>
                )
                // notFound()
            }
            <div
                css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                `}
            >
                {/* {page && parseInt(page) > 1 && ( */}
                <button style={buttonBigStyles}>Предыдущая страница</button>
                {/* )} */}
                {vacancies?.count === vacancies?.size && <button style={buttonBigStyles}>Следующая страница</button>}
            </div>
        </section>
    );
};

export default VacancyList;
