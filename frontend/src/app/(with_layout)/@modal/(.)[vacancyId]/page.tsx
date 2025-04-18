"use server"

import Modal from "@/components/Modal";
import { notFound } from "next/navigation";
import VacancyComponent from "./components/VacancyComponent";
import { getVacancy } from "@/actions/getVacancy";

interface VacancyPage {
  params: Promise<{ vacancyId: string }>;
}

const ModalVacancyPage = async (props: VacancyPage) => {
  const { vacancyId } = await props.params;

  if (!vacancyId || !Number(vacancyId)) {
    return notFound();
  }

  const vacancy = await getVacancy(vacancyId);

  return (
    <Modal isOpen={Boolean(vacancyId)}>
      <VacancyComponent vacancy={vacancy} />
    </Modal>
  );
};

export default ModalVacancyPage;
