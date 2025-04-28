import Parser from 'html-react-parser';

import { useMedia } from '@scripts/hooks/useMedia';

import styles from '../../VacancyList.module.scss';

interface IVacancyDescriptionProps {
    name: string;
    description?: string;
}

const VacancyDescription = (props: IVacancyDescriptionProps) => {
    const { description, name } = props;
    const { xxs } = useMedia();

    return (
        <div
            className={styles['vacancy-list_flex-item']}
            css={{
                [xxs]: {
                    marginTop: '16px',
                },
            }}
        >
            <div className={styles['vacancy-list_desc']}>
                <div
                    className={styles['vacancy-list_title']}
                    css={{
                        [xxs]: {
                            fontSize: '22px',
                            marginBottom: '16px',
                        },
                    }}
                >
                    {name}
                </div>
                <div>{Parser(String(description || ''))}</div>
            </div>
        </div>
    );
};

export default VacancyDescription;
