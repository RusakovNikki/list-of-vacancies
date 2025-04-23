"use client";

import { createVacancy } from "@/actions/server/createVacancy";
import CreateVacancyForm from "@/components/CreateVacancyForm";
import Modal from "@/components/Modal";
import { usePathname, useRouter } from "next/navigation";

const CreateVacationPage = () => {
  const router = useRouter();
  const path = usePathname();

  async function handleCreateVacation(formData: FormData) {
    const employmentTypeName = formData.get("employerType")?.toString();
    const name = formData.get("name")!.toString();
    const logoURL = formData.get("logoURL")?.toString();
    const URL = formData.get("URL")?.toString();
    const areaName = formData.get("areaName")?.toString();
    const employerName = formData.get("employerName")?.toString();
    const description = formData.get("description")?.toString();

    const result = await createVacancy({
      name,
      areaName,
      description,
      employerName,
      employmentTypeName,
      logoURL,
      URL,
    });

    if ("id" in result) {
      router.back();
      router.refresh();
    } else throw new Error();
  }

  return (
    <Modal isOpen={path === "/create"}>
      <CreateVacancyForm handleCreateVacation={handleCreateVacation} />
    </Modal>
  );
};

export default CreateVacationPage;
