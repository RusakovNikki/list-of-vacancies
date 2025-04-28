import { Layout, scale } from '@greensight/gds/emotion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TSearchParams } from 'src/pages';
import useSearchStore from 'src/store';

import Button from '@components/Button';
import FormField from '@components/FormField';
import FormItem from '@components/FormItem';

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
            <FormItem>
                <label htmlFor="employmentTypeName" css={formItemTitleStyles}>
                    Поиск по типу занятости
                </label>
                <FormField
                    id="employmentTypeName"
                    type="text"
                    placeholder="Не указано"
                    name="employmentTypeName"
                    value={employmentTypeName}
                    onChange={e => setField(e.target.value, 'employmentTypeName')}
                />
            </FormItem>
            <FormItem>
                <label htmlFor="name" css={formItemTitleStyles}>
                    Поиск по названию
                </label>
                <FormField
                    id="name"
                    type="text"
                    placeholder="Не указано"
                    name="name"
                    value={name}
                    onChange={e => setField(e.target.value, 'name')}
                />
            </FormItem>
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
