"use server";

import { createVacancy } from "@/actions/server/createVacancy";
import CreateVacancyForm from "@/components/CreateVacancyForm";
import { redirect } from "next/navigation";

const CreateVacationPage = () => {
  async function handleCreateVacation(formData: FormData) {
    "use server";

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

    if ("id" in result) redirect("/");
    else throw new Error();
  }

  return <CreateVacancyForm handleCreateVacation={handleCreateVacation} />;
};

export default CreateVacationPage;
