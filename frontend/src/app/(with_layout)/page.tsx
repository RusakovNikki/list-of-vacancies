"use server"

import { getVacancies } from "@/actions/getVacancies"
import VacancyList from "./components/VacancyList";
import SearchForm from "./components/SearchForm";

export default async function Home() {
  const vacancies = await getVacancies();

  return <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <SearchForm />
    <VacancyList vacancies={vacancies} />
  </div>
}
