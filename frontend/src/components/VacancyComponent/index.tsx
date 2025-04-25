import { IVacancy } from '@scripts/interfaces/vacancy';

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
            <div className={styles['vacancy-component__flex-item']}>
                <div className={styles['vacancy-component__logo-container']}>
                    {logoURL ? (
                        <img src={logoURL} alt="логотип компании" className={styles['vacancy-component__logo']} />
                    ) : (
                        <PreviewImage className={styles['vacancy-component__logo--svg']} />
                    )}
                </div>
                <div className={styles['vacancy-component__about']}>
                    <p className={styles['vacancy-component__type']}>
                        Тип занятости:
                        <span className={styles['vacancy-component__desc']}> {employmentTypeName}</span>
                    </p>
                    <p className={styles['vacancy-component__type']}>
                        Компания:
                        <span className={styles['vacancy-component__desc']}> {employerName}</span>
                    </p>
                    <p className={styles['vacancy-component__type']}>
                        Ссылка на вакансию:
                        <span className={styles['vacancy-component__desc']}>
                            <a href={URL}> {URL}</a>
                        </span>
                    </p>
                    <p className={styles['vacancy-component__type']}>
                        Адрес:
                        <span className={styles['vacancy-component__desc']}> {areaName}</span>
                    </p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default VacancyComponent;
