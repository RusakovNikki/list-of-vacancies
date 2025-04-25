import Parser from 'html-react-parser';

import styles from '../../VacancyList.module.scss';

interface IVacancyDescriptionProps {
    name: string;
    description?: string;
}

const VacancyDescription = (props: IVacancyDescriptionProps) => {
    const { description, name } = props;

    return (
        <div className={styles['vacancy-list__flex-item']}>
            <div className={styles['vacancy-list__desc']}>
                <div className={styles['vacancy-list__title']}>{name}</div>
                <div>{Parser(String(description || ''))}</div>
            </div>
        </div>
    );
};

export default VacancyDescription;
