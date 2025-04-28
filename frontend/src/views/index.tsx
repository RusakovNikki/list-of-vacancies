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
        <div css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SearchForm searchParams={searchParams} />
            <VacancyList vacancies={vacancies} searchParams={searchParams} />
        </div>
    );
}
