"use server"

import { notFound } from "next/navigation";
import { getVacancy } from "@/actions/getVacancy";
import VacancyComponent from "@/components/VacancyComponent";
import VacancyDescription from "@/components/VacancyDescription";

interface VacancyPage {
  params: Promise<{ vacancyId: string }>;
}

const VacancyPage = async (props: VacancyPage) => {
  const { vacancyId } = await props.params;

  if (!vacancyId || !Number(vacancyId)) {
    return notFound();
  }

  const vacancy = await getVacancy(vacancyId);

  return <VacancyComponent vacancy={vacancy}>
    <VacancyDescription name={vacancy.name} description={vacancy.description} />
  </VacancyComponent>;
};

export default VacancyPage;
