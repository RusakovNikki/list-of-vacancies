import { TSearchParams } from '@/pages';
import { IVacancyWrapper } from '@/schemas/interfaces/vacancy';

import SearchForm from '@components/SearchForm';
import VacancyList from '@components/VacancyList';

interface HomePage {
    vacancies: IVacancyWrapper;
    searchParams: TSearchParams;
}

export default function Home({ searchParams, vacancies }: HomePage) {
    return (
        <div className="vacancy-list">
            <SearchForm searchParams={searchParams} />
            <VacancyList vacancies={vacancies} searchParams={searchParams} />
        </div>
    );
}
