import { Layout, scale } from '@greensight/gds/emotion';
import { TSearchParams } from 'src/pages';

import { IVacancyWrapper } from '@api/vacancies/types/vacancy';

import SearchForm from '@components/SearchForm';
import VacancyList from '@components/VacancyList';

interface HomePage {
    vacancies: IVacancyWrapper;
    searchParams: TSearchParams;
}

export default function Home(props: HomePage) {
    const { searchParams, vacancies } = props;

    return (
        <Layout type="flex" direction="column" gap={scale(1)}>
            <Layout.Item>
                <SearchForm searchParams={searchParams} />
            </Layout.Item>
            <Layout.Item>
                <VacancyList vacancies={vacancies} searchParams={searchParams} />
            </Layout.Item>
        </Layout>
    );
}
