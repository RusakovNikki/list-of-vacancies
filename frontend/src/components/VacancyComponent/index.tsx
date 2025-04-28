import { Layout } from '@greensight/gds/emotion';

import { IVacancy } from '@api/vacancies/types/vacancy';

import { typography } from '@scripts/gds';
import { useMedia } from '@scripts/hooks/useMedia';

import styles from './VacancyComponent.module.scss';
import PreviewImage from '/public/preview_company.svg';

interface IVacancyComponentV2Props {
    vacancy: IVacancy;
    children: React.ReactNode;
}

const VacancyComponent = (props: IVacancyComponentV2Props) => {
    const { vacancy, children } = props;
    const { xxs, sm, md } = useMedia();

    const { URL, areaName, employerName, employmentTypeName, logoURL } = vacancy;

    return (
        <Layout.Item css={{ width: '100%' }}>
            <div
                className={styles['vacancy-component']}
                css={{
                    [sm]: {
                        flexDirection: 'row',
                    },
                    [xxs]: {
                        width: 'inherit',
                        flexDirection: 'column',
                    },
                }}
            >
                <Layout type="flex" direction="column" className={styles['vacancy-component_flex-item']}>
                    <Layout.Item
                        className={styles['vacancy-component_logo-container']}
                        css={{
                            [md]: {
                                width: '250px',
                                height: '70px',
                            },
                            [xxs]: {
                                width: '232px',
                                height: '59px',
                                marginBottom: '38px',
                            },
                        }}
                    >
                        {logoURL ? (
                            <img src={logoURL} alt="логотип компании" className={styles['vacancy-component_logo']} />
                        ) : (
                            <PreviewImage className={styles['vacancy-component_logo__svg']} />
                        )}
                    </Layout.Item>
                    <Layout.Item className={styles['vacancy-component_about']}>
                        <p css={{ ...typography('bodySm') }} className={styles['vacancy-component_type']}>
                            Тип занятости:
                            <span className={styles['vacancy-component_desc']} css={{ ...typography('bodySmBold') }}>
                                {' '}
                                {employmentTypeName}
                            </span>
                        </p>
                        <p css={{ ...typography('bodySm') }} className={styles['vacancy-component_type']}>
                            Компания:
                            <span className={styles['vacancy-component_desc']} css={{ ...typography('bodySmBold') }}>
                                {' '}
                                {employerName}
                            </span>
                        </p>
                        <p css={{ ...typography('bodySm') }} className={styles['vacancy-component_type']}>
                            Ссылка на вакансию:
                            <span className={styles['vacancy-component_desc']} css={{ ...typography('bodySmBold') }}>
                                <a href={URL}> {URL}</a>
                            </span>
                        </p>
                        <p css={{ ...typography('bodySm') }} className={styles['vacancy-component_type']}>
                            Адрес:
                            <span className={styles['vacancy-component_desc']} css={{ ...typography('bodySmBold') }}>
                                {' '}
                                {areaName}
                            </span>
                        </p>
                    </Layout.Item>
                </Layout>
                {children}
            </div>
        </Layout.Item>
    );
};

export default VacancyComponent;
