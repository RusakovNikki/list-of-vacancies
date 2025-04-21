"use server"

import { getVacancies } from "@/actions/getVacancies"
import VacancyList from "./components/VacancyList";
import SearchForm from "./components/SearchForm";
import { EVacancyType } from "@/schemas/enums/vacancy";

export type TSearchParams = {
  employmentTypeId?: EVacancyType;
  name?: string;
  page?: string;
}

interface HomePage {
  searchParams: Promise<TSearchParams>;
}

export default async function Home(props: HomePage) {
  const searchParams = await props.searchParams;
  const vacancies = await getVacancies(searchParams);

  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <SearchForm searchParams={searchParams} />
    <VacancyList vacancies={vacancies} searchParams={searchParams} />
  </div>
}
