import { IVacancy } from "@/schemas/interfaces/vacancy"

export const getVacancies = async (): Promise<IVacancy[]> => {
    return await fetch("http://localhost:3001/api/vacancies").then(res => res.json())
}