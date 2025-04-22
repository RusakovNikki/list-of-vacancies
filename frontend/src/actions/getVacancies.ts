import { TSearchParams } from "@/app/(with_layout)/page"
import { IVacancyWrapper } from "@/schemas/interfaces/vacancy"

export const getVacancies = async (searchParams?: TSearchParams): Promise<IVacancyWrapper> => {
    const params = new URLSearchParams(searchParams).toString();

    return await fetch(`http://localhost:3001/api/vacancies/?${params}`).then(res => res.json())
}