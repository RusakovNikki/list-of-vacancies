import { TSearchParams } from 'src/pages';

import SearchForm from '@components/SearchForm';
import VacancyList from '@components/VacancyList';

import { IVacancyWrapper } from '@scripts/interfaces/vacancy';

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
