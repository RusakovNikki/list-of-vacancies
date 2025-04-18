"use server"

import { getVacancies } from "@/actions/getVacancies"
import VacancyList from "./components/VacancyList";

export default async function Home() {
  const vacancies = await getVacancies();

  return <>
    <VacancyList vacancies={vacancies} />
  </>
}
