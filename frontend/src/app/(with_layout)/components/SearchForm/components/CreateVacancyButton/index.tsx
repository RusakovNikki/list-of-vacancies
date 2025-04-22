"use client";

import { useRouter } from "next/navigation";

const CreateVacancyButton = () => {
  const router = useRouter();

  async function handleCreateVacancy() {
    router.push("/create");
  }
  return (
    <button type="button" onClick={handleCreateVacancy} className="button button--small">
      Создать вакансию
    </button>
  );
};

export default CreateVacancyButton;
