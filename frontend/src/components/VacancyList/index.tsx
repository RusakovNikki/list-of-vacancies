import { Layout } from '@greensight/gds/emotion';
import { useRouter } from 'next/navigation';
import { TSearchParams } from 'src/pages';

import { useDeleteVacancy } from '@api/vacancies';
import { IVacancyWrapper } from '@api/vacancies/types/vacancy';

import VacancyComponent from '@components/VacancyComponent';
import Button from '@components/controls/Button';

import { typography } from '@scripts/gds';
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

    const handleChangePage = (value: number) => {
        const params = new URLSearchParams();
        if (employmentTypeName) params.append('employmentTypeName', employmentTypeName.toString());
        if (name) params.append('name', name.toString());
        params.append('page', `${parseInt(page || '1') + value}`);
        console.log(params.get('page'));

        router.push(`/?${params}`);
    };

    console.log(typography('h1'));

    const handleDeleteVacancy = (vacancyId: number) => {
        mutate(vacancyId, {
            onSuccess: () => router.refresh(),
            onError: error => console.error(error),
        });
    };

    return (
        <section>
            <Layout type="flex" wrap={false} direction="column">
                {vacancies?.result.length ? (
                    vacancies.result.map(vacancy => {
                        return (
                            <VacancyComponent key={vacancy.id} vacancy={vacancy}>
                                <Layout
                                    type="flex"
                                    justify="space-between"
                                    direction={{
                                        xxxl: 'row',
                                        sm: 'column',
                                    }}
                                    wrap={false}
                                    className={styles['vacancyList_content']}
                                >
                                    <Layout.Item css={{ width: '100%' }}>
                                        <Layout
                                            type="flex"
                                            direction="column"
                                            justify="space-between"
                                            wrap={false}
                                            css={{
                                                width: '100%',
                                                height: '100%',
                                                margin: '0px',
                                            }}
                                        >
                                            <Layout.Item>
                                                <div className={styles['vacancyList_desc']}>
                                                    <div css={{ ...typography('h1') }}>{vacancy.name}</div>
                                                </div>
                                            </Layout.Item>
                                            <Layout.Item>
                                                <div
                                                    className={styles['vacancyList_moreBtn']}
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
                                                        ...typography('caption'),
                                                    }}
                                                >
                                                    Подробнее
                                                </div>
                                            </Layout.Item>
                                        </Layout>
                                    </Layout.Item>
                                    <Layout.Item>
                                        <Button
                                            isSmall
                                            css={{
                                                alignSelf: 'flex-start',
                                                minWidth: '200px',
                                                width: '200px',
                                            }}
                                            onClick={() => handleDeleteVacancy(vacancy.id)}
                                        >
                                            Удалить
                                        </Button>
                                    </Layout.Item>
                                </Layout>
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
                    <Button onClick={() => handleChangePage(-1)}>Предыдущая страница</Button>
                )}
                {vacancies?.count === vacancies?.size && (
                    <Button onClick={() => handleChangePage(1)}>Следующая страница</Button>
                )}
            </div>
        </section>
    );
};

export default VacancyList;
