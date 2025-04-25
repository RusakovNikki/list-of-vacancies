import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TSearchParams } from 'src/pages';
import useSearchStore from 'src/store';

import { useButton } from '@scripts/hooks/useButton';

import styles from './SearchForm.module.scss';

interface ISearchFormProps {
    searchParams?: TSearchParams;
}

const SearchForm = (props: ISearchFormProps) => {
    const { employmentTypeName: employmentTypeNameParam, name: nameParam, page } = props.searchParams || {};

    const { employmentTypeName, name, setField } = useSearchStore(state => state);
    const router = useRouter();

    const stylesButton = useButton(true);

    useEffect(() => {
        setField(employmentTypeNameParam || '', 'employmentTypeName');
        setField(nameParam || '', 'name');
    }, [employmentTypeNameParam, nameParam, setField]);

    function getVacanciesByFilterForm(formData: FormData) {
        const employmentTypeName = formData.get('employmentTypeName');
        const name = formData.get('name');
        const params = new URLSearchParams();
        if (employmentTypeName) params.append('employmentTypeName', employmentTypeName.toString());
        if (name) params.append('name', name.toString());
        if (page) params.append('page', `${page}`);
        router.push(`/?${params}`);
    }

    return (
        <form
            action={getVacanciesByFilterForm}
            css={css`
                display: flex;
                gap: 0.5rem;

                @media (max-width: 450px) {
                    flex-direction: column;
                }
            `}
        >
            <div className={styles['form-item']}>
                <label htmlFor="employmentTypeName" className={styles['form-item__title']}>
                    Поиск по типу занятости
                </label>
                <input
                    id="employmentTypeName"
                    type="text"
                    placeholder="Не указано"
                    className={styles['form-item__field']}
                    name="employmentTypeName"
                    value={employmentTypeName}
                    onChange={e => setField(e.target.value, 'employmentTypeName')}
                />
            </div>
            <div className={styles['form-item']}>
                <label htmlFor="name" className={styles['form-item__title']}>
                    Поиск по названию
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Не указано"
                    className={styles['form-item__field']}
                    name="name"
                    value={name}
                    onChange={e => setField(e.target.value, 'name')}
                />
            </div>
            <div
                css={css`
                    display: flex;
                    align-items: flex-end;
                    gap: 0.5rem;

                    @media (max-width: 770px) {
                        flex-direction: column;
                    }

                    @media (max-width: 450px) {
                        align-items: center;
                    }
                `}
            >
                <button
                    style={stylesButton}
                    onClick={() => {
                        setField('', 'employmentTypeName');
                        setField('', 'name');
                    }}
                >
                    Сбросить
                </button>
                <button type="submit" style={stylesButton}>
                    Поиск вакансий
                </button>
                <button type="button" style={stylesButton}>
                    Создать вакансию
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
