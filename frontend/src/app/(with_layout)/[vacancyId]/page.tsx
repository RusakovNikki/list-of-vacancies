"use server";

import { notFound } from "next/navigation";
import VacancyData from "./components/VacancyData";

interface VacancyPage {
  params: Promise<{ vacancyId: string }>;
}

const VacancyPage = async (props: VacancyPage) => {
  const { vacancyId } = await props.params;

  if (!vacancyId || !Number(vacancyId)) {
    return notFound();
  }

  return <VacancyData vacancyId={vacancyId} />;
};

export default VacancyPage;
