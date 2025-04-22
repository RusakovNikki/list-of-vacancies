import { IVacancyWrapper } from "@/schemas/interfaces/vacancy";

export const deleteVacancy = async (vacancyId: number): Promise<IVacancyWrapper> => {
  return await fetch(`http://localhost:3001/api/vacancies/${vacancyId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
