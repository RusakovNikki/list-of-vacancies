import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TSearchParams } from 'src/pages';
import useSearchStore from 'src/store';

import { useButton } from '@scripts/hooks/useButton';
import { useFormField } from '@scripts/hooks/useFormField';
import { useFormItem } from '@scripts/hooks/useFormItem';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

interface ISearchFormProps {
    searchParams?: TSearchParams;
}

const SearchForm = (props: ISearchFormProps) => {
    const { employmentTypeName: employmentTypeNameParam, name: nameParam } = props.searchParams || {};
    const router = useRouter();
    const { employmentTypeName, name, setField } = useSearchStore(state => state);

    const stylesButton = useButton(true);
    const formItemTitleStyles = useFormTitle();
    const formFieldStyles = useFormField();
    const formStyles = useFormItem();

    useEffect(() => {
        setField(employmentTypeNameParam || '', 'employmentTypeName');
        setField(nameParam || '', 'name');
    }, [employmentTypeNameParam, nameParam, setField]);

    return (
        <form
            css={css`
                display: flex;
                gap: 0.5rem;

                @media (max-width: 450px) {
                    flex-direction: column;
                }
            `}
        >
            <div css={formStyles}>
                <label htmlFor="employmentTypeName" css={formItemTitleStyles}>
                    Поиск по типу занятости
                </label>
                <input
                    id="employmentTypeName"
                    type="text"
                    placeholder="Не указано"
                    css={formFieldStyles}
                    name="employmentTypeName"
                    value={employmentTypeName}
                    onChange={e => setField(e.target.value, 'employmentTypeName')}
                />
            </div>
            <div css={formStyles}>
                <label htmlFor="name" css={formItemTitleStyles}>
                    Поиск по названию
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Не указано"
                    css={formFieldStyles}
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
                <button type="button" style={stylesButton} onClick={() => router.push('/create')}>
                    Создать вакансию
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
