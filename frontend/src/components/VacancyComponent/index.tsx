import { IVacancy } from '@api/vacancies/types/vacancy';

import styles from './VacancyComponent.module.scss';
import PreviewImage from '/public/preview_company.svg';

interface IVacancyComponentV2Props {
    vacancy: IVacancy;
    children: React.ReactNode;
}

const VacancyComponent = (props: IVacancyComponentV2Props) => {
    const { vacancy, children } = props;

    const { URL, areaName, employerName, employmentTypeName, logoURL } = vacancy;

    return (
        <div className={styles['vacancy-component']}>
            <div className={styles['vacancy-component_flex-item']}>
                <div className={styles['vacancy-component_logo-container']}>
                    {logoURL ? (
                        <img src={logoURL} alt="логотип компании" className={styles['vacancy-component_logo']} />
                    ) : (
                        <PreviewImage className={styles['vacancy-component_logo__svg']} />
                    )}
                </div>
                <div className={styles['vacancy-component_about']}>
                    <p className={styles['vacancy-component_type']}>
                        Тип занятости:
                        <span className={styles['vacancy-component_desc']}> {employmentTypeName}</span>
                    </p>
                    <p className={styles['vacancy-component_type']}>
                        Компания:
                        <span className={styles['vacancy-component_desc']}> {employerName}</span>
                    </p>
                    <p className={styles['vacancy-component_type']}>
                        Ссылка на вакансию:
                        <span className={styles['vacancy-component_desc']}>
                            <a href={URL}> {URL}</a>
                        </span>
                    </p>
                    <p className={styles['vacancy-component_type']}>
                        Адрес:
                        <span className={styles['vacancy-component_desc']}> {areaName}</span>
                    </p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default VacancyComponent;
