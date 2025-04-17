import VacancyComponent from "@/components/VacancyComponent";
import Modal from "@/components/Modal";
import { notFound } from "next/navigation";

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
      <VacancyComponent vacancyId={parseInt(vacancyId)} />
    </Modal>
  );
};

export default ModalVacancyPage;
