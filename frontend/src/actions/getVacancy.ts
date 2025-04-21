import { IVacancy } from "@/schemas/interfaces/vacancy"

export const getVacancy = async (vacancyId: string): Promise<IVacancy | { error: string }> => {
    return await fetch(`http://localhost:3001/api/vacancies/${vacancyId}`).then(res => res.json())
}