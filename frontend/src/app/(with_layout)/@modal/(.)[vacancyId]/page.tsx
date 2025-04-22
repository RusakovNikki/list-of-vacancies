"use server";

import Modal from "@/components/Modal";
import { notFound } from "next/navigation";
import { getVacancy } from "@/actions/getVacancy";
import VacancyComponent from "@/components/VacancyComponent";
import VacancyDescription from "@/components/VacancyDescription";

interface VacancyPage {
  params: Promise<{ vacancyId: string }>;
}

const ModalVacancyPage = async (props: VacancyPage) => {
  const { vacancyId } = await props.params;

  if (!vacancyId || !Number(vacancyId)) {
    return notFound();
  }

  const vacancy = await getVacancy(vacancyId);

  if ("error" in vacancy) throw new Error();

  return (
    <Modal isOpen={Boolean(vacancyId)}>
      <VacancyComponent vacancy={vacancy}>
        <VacancyDescription name={vacancy.name} description={vacancy.description} />
      </VacancyComponent>
    </Modal>
  );
};

export default ModalVacancyPage;
