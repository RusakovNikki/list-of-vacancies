import { Layout } from '@greensight/gds/emotion';
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
        <Layout
            type="flex"
            direction="column"
            justify="space-between"
            css={{
                width: '100%',
                height: '100%',

                [xxs]: {
                    marginTop: '16px',
                },
            }}
        >
            <Layout.Item className={styles['vacancy-list_desc']}>
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
            </Layout.Item>
        </Layout>
    );
};

export default VacancyDescription;
