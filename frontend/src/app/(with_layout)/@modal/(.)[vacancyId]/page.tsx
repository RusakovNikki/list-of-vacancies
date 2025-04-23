"use server";

import Modal from "@/components/Modal";
import { notFound } from "next/navigation";
import VacancyData from "./components/VacancyData";

interface VacancyPage {
  params: Promise<{ vacancyId: string }>;
}

const ModalVacancyPage = async (props: VacancyPage) => {
  const { vacancyId } = await props.params;

  if (!vacancyId || !Number(vacancyId)) {
    return notFound();
  }

  return (
    <Modal isOpen={Boolean(vacancyId)}>
      <VacancyData vacancyId={vacancyId} />
    </Modal>
  );
};

export default ModalVacancyPage;
