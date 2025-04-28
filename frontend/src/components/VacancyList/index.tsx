import { css } from '@emotion/react';
import { Layout } from '@greensight/gds/emotion';
import { useRouter } from 'next/navigation';
import { TSearchParams } from 'src/pages';

import { useDeleteVacancy } from '@api/vacancies';
import { IVacancyWrapper } from '@api/vacancies/types/vacancy';

import VacancyComponent from '@components/VacancyComponent';

import { useButton } from '@scripts/hooks/useButton';
import { useMedia } from '@scripts/hooks/useMedia';

import styles from './VacancyList.module.scss';

export interface IVacancyListProps {
    vacancies: IVacancyWrapper;
    searchParams: TSearchParams;
}

const VacancyList = (props: IVacancyListProps) => {
    const { vacancies, searchParams } = props;
    const router = useRouter();
    const { mutate } = useDeleteVacancy();
    const { sm, xxs } = useMedia();

    const { employmentTypeName, name, page } = searchParams;

    const buttonStyles = useButton(true);
    const buttonBigStyles = useButton();

    const handleChangePage = (value: number) => {
        const params = new URLSearchParams();
        if (employmentTypeName) params.append('employmentTypeName', employmentTypeName.toString());
        if (name) params.append('name', name.toString());
        params.append('page', `${parseInt(page || '1') + value}`);
        console.log(params.get('page'));

        router.push(`/?${params}`);
    };

    const handleDeleteVacancy = (vacancyId: number) => {
        mutate(vacancyId, {
            onSuccess: () => router.refresh(),
            onError: error => console.error(error),
        });
    };

    return (
        <section>
            <Layout type="flex">
                {vacancies?.result.length ? (
                    vacancies.result.map(vacancy => {
                        return (
                            <VacancyComponent key={vacancy.id} vacancy={vacancy}>
                                <div
                                    className={styles['vacancy-list_content']}
                                    css={{
                                        [sm]: {
                                            flexDirection: 'column',
                                        },
                                    }}
                                >
                                    <Layout
                                        type="flex"
                                        direction="column"
                                        justify="space-between"
                                        css={{
                                            width: '100%',
                                            height: '100%',
                                            margin: '0px',
                                        }}
                                        style={{
                                            margin: '0',
                                        }}
                                    >
                                        <div className={styles['vacancy-list_desc']}>
                                            <div className={styles['vacancy-list_title']}>{vacancy.name}</div>
                                        </div>
                                        <div
                                            className={styles['vacancy-list_more-btn']}
                                            onClick={() => {
                                                router.push(`${vacancy.id}`);
                                            }}
                                            css={{
                                                [sm]: {
                                                    alignSelf: 'start',
                                                },
                                                [xxs]: {
                                                    alignSelf: 'center',
                                                },
                                            }}
                                        >
                                            Подробнее
                                        </div>
                                    </Layout>
                                    <button
                                        css={{
                                            ...buttonStyles,
                                            alignSelf: 'flex-start',
                                            minWidth: '200px',
                                            width: '200px',
                                        }}
                                        onClick={() => handleDeleteVacancy(vacancy.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </VacancyComponent>
                        );
                    })
                ) : (
                    <></>
                )}
            </Layout>
            <div
                css={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                {page && parseInt(page) > 1 && (
                    <button css={buttonBigStyles} onClick={() => handleChangePage(-1)}>
                        Предыдущая страница
                    </button>
                )}
                {vacancies?.count === vacancies?.size && (
                    <button css={buttonBigStyles} onClick={() => handleChangePage(1)}>
                        Следующая страница
                    </button>
                )}
            </div>
        </section>
    );
};

export default VacancyList;
