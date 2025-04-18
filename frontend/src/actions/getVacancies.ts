import { TSearchParams } from "@/app/(with_layout)/page"
import { IVacancy } from "@/schemas/interfaces/vacancy"

export const getVacancies = async (searchParams?: TSearchParams): Promise<IVacancy[]> => {
    const params = new URLSearchParams(searchParams).toString();

    return await fetch(`http://localhost:3001/api/vacancies/?${params}`).then(res => res.json())
}