import { Layout, scale } from '@greensight/gds/emotion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TSearchParams } from 'src/pages';
import useSearchStore from 'src/store';

import Button from '@components/Button';

import { useFormField } from '@scripts/hooks/useFormField';
import { useFormItem } from '@scripts/hooks/useFormItem';
import { useFormTitle } from '@scripts/hooks/useFormTitle';
import { useMedia } from '@scripts/hooks/useMedia';

interface ISearchFormProps {
    searchParams?: TSearchParams;
}

const SearchForm = (props: ISearchFormProps) => {
    const { employmentTypeName: employmentTypeNameParam, name: nameParam } = props.searchParams || {};
    const router = useRouter();
    const { xxs } = useMedia();
    const { employmentTypeName, name, setField } = useSearchStore(state => state);

    const formItemTitleStyles = useFormTitle();
    const formFieldStyles = useFormField();
    const formStyles = useFormItem();

    useEffect(() => {
        setField(employmentTypeNameParam || '', 'employmentTypeName');
        setField(nameParam || '', 'name');
    }, [employmentTypeNameParam, nameParam, setField]);

    return (
        <form
            css={{
                display: 'flex',
                gap: '0.5rem',

                [xxs]: {
                    flexDirection: 'column',
                },
            }}
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
            <Layout
                type="flex"
                align={{
                    xxxl: 'end',
                    xxs: 'center',
                }}
                gap={scale(1)}
                direction={{
                    xs: 'column',
                }}
                wrap={false}
            >
                <Layout.Item>
                    <Button
                        isSmall
                        onClick={() => {
                            setField('', 'employmentTypeName');
                            setField('', 'name');
                        }}
                    >
                        Сбросить
                    </Button>
                </Layout.Item>
                <Layout.Item>
                    <Button isSmall type="submit">
                        Поиск вакансий
                    </Button>
                </Layout.Item>
                <Layout.Item>
                    <Button type="button" isSmall onClick={() => router.push('/create')}>
                        Создать вакансию
                    </Button>
                </Layout.Item>
            </Layout>
        </form>
    );
};

export default SearchForm;
