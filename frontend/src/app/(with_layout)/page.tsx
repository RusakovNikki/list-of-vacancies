"use server";

import { getVacancies } from "@/actions/getVacancies";
import VacancyList from "./components/VacancyList";
import SearchForm from "./components/SearchForm";

export type TSearchParams = {
  employmentTypeName?: string;
  name?: string;
  page?: string;
};

interface HomePage {
  searchParams: Promise<TSearchParams>;
}

export default async function Home(props: HomePage) {
  const searchParams = await props.searchParams;
  const vacancies = await getVacancies(searchParams);

  return (
    <div className="vacancy-list">
      <SearchForm searchParams={searchParams} />
      <VacancyList vacancies={vacancies} searchParams={searchParams} />
    </div>
  );
}
